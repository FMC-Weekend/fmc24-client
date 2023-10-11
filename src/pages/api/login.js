import db from "../../../db";
import userModel from "../../../models/user.m";
import CartModel from "../../../models/cart.m";
import CryptoJS from "crypto-js";
import instiModel from "../../../models/inst.m";
import { OAuth2Client } from 'google-auth-library';
import getConfig from 'next/config';
export default async function handler(req, res) {
 const { publicRuntimeConfig } = getConfig();



    const CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(CLIENT_ID);
    try {
        await db();
        if (req.method === 'POST') {
            const { token } = req.body;
            const user = {};
            console.log(token)


            async function verify() {
                try {
                    const ticket = await client.verifyIdToken({
                        idToken: token,
                        audience: CLIENT_ID,
                    });

                    const payload = ticket.getPayload();
                    user.email = payload.email;
                    user.name = payload.name;
                    user.newUser = false;
                    user.role = -1;
                    await userModel.findOne({
                        email: payload.email
                    }).then(async function (foundItem) {
                        if (!foundItem) {
                            user.newUser = true;
                            await userModel.create(user)
                                .then(async function (newUser) {
                                    user.userID = newUser._id;
                                    const newCart = await CartModel.create({
                                        forUser: newUser._id,
                                        cartItems: []
                                    });
                                    newUser.userCart = newCart._id;
                                    await newUser.save();
                                    console.log('Added new user');
                                }).catch(function (error) {
                                    console.log(error);
                                });
                        }
                        else if (!foundItem.number) {
                            user.newUser = true;
                            user.role = foundItem.role;
                        }
                        else user.role = foundItem.role;
                    })



                } catch (err) {
                    console.log(err);
                    return res.json({ message: 'invalid token' });
                }
            }

            if (token) {
                await verify()
                    .then(async () => {
                        var emcheck = user.email.substr(user.email.length - 11);
                        if (user.role === 0) {
                            const encryptedHash = CryptoJS.AES.encrypt(user.email, "shubhamiitbhu").toString();
                            return res.json({
                                "message": "insti",
                                userType: 0,
                                encryptedHash,
                                user
                            })
                        }
                        else if (emcheck === "itbhu.ac.in") {
                            var inst = {};
                            inst.userID = user.userID;
                            instiModel.create(inst).then((result) => {
                                userModel.updateOne({ email: user.email }, {
                                    role: 0
                                })
                                    .then((result) => {
                                        const encryptedHash = CryptoJS.AES.encrypt(user.email, "shubhamiitbhu").toString();
                                        return res.json({
                                            "message": "insti",
                                            encryptedHash,
                                            userType: 0,
                                            user
                                        });
                                    }).catch((error) => {
                                        console.log(error);
                                    });
                            }).catch((error) => {
                                console.log(error);
                            });
                        }
                        else if (user.role === 2) return res.json({
                            "message": "ca",
                            userType: 2,
                            user
                        });
                        else if (user.role === 1) {
                            return res.json({
                                userType: 1,
                                user
                            })
                        }
                        else return res.json({
                            "message": "New user log in",
                            user
                        })
                    })

                    .catch(console.error);
            } else {
                return res.json({
                    message: 'token required',
                });
            }
        } else {
            return res.status(405).end(); // Method not allowed
        }
    } catch (error) {
        res.json({
            status: 'Fail',
            error,
        });
    }
}
