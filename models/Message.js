import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: 'Property',
        required: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    phone: String,
    body: String,
    read: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});

const Message = models.User || model('Message', MessageSchema);

export default Message;