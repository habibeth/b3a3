import mongoose, { Schema } from "mongoose";
import { RoomModel, TRoom } from "./room.interface";
import { meetingRoomAmenities } from "./room.constant";



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
        enum: meetingRoomAmenities
    },
})


roomSchema.statics.isRoomExists = async function (roomNo: number, floorNo: number) {
    const existingRoom = await Room.findOne({ roomNo, floorNo });
    return existingRoom;
};

export const Room = mongoose.model<TRoom, RoomModel>('Room', roomSchema)