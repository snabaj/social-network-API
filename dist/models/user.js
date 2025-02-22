import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /.+\@.+\..+/,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
}, { toJSON: { virtuals: true }, id: false });
UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});
export default model("User", UserSchema);
