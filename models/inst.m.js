// models/inst.m.js
import mongoose from "mongoose";
const Schema = mongoose.Schema;

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const inSchema = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});
const instiModel = mongoose.models.In || mongoose.model("In", inSchema);

inSchema.pre(/^find/, async function (next) {
    this.populate({
        path: "userID",
    });
    next();
});

export default instiModel;
