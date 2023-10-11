import db from "../../../db";
import CartModel from "../../../models/cart.m";
import caModel from "../../../models/ca.m";
import paModel from "../../../models/pa.m";
import userModel from "../../../models/user.m";
export default async function handler(req, res) {
    try {
        await db();
        try {
          
            const email = req.get('email');

           

            if (!email) {
                return res.json({
                    message: "user not found, please sign in again",
                });
            }

            let user = {};
            const x=await userModel.findOne({ email: email })
            console.log(x)
            
                // .then(async function (foundItem) {
                //     if (foundItem) {
                //         user = foundItem;
                //         if (user.role === 1) {
                //             await paModel.findOne({
                //                 userID: mongoose.Types.ObjectId(user._id),
                //             }).then(async (ref_found) => {
                //                 user = ref_found;
                //             })
                //         }
                //         else if (user.role === 2) {
                //             await caModel
                //                 .findOne({
                //                     userID: mongoose.Types.ObjectId(user._id),
                //                 })
                //                 .then(async (ref_found) => {
                //                     user = ref_found;
                //                 });
                //         }

                //         res.json({
                //             message: "success",
                //             user,
                //         });
                //     } else {
                //         return res.json({
                //             message: "user not found, please sign in again",
                //         });
                //     }

                // })
                .catch((err) => {
                    console.log(err);
                    return res.json({ message: "server side error" });
                });
        }
        catch (error) {
            res.json({
                status: 'Fail',
                error
            })
        }
    }
    catch (error) {
        res.json({
            status: 'Fail',
            error
        })
    }
}
