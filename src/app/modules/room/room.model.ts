import mongoose, { Schema } from "mongoose";
import { RoomModel, TRoom } from "./room.interface";



const roomSchema = new Schema<TRoom, RoomModel>({
    name: {
        type: String,
        required: true,
    },
    roomNo: {
        type: Number,
        required: true,
    },
    floorNo: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    pricePerSlot: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
    },
})


roomSchema.statics.isRoomExists = async function (roomNo: string, floorNo: string) {
    const existingRoom = await Room.findOne({ roomNo, floorNo });
    return existingRoom;
};


const Room = mongoose.model<TRoom>('Room', roomSchema)