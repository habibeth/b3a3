import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TRoom } from "./room.interface";
import { Room } from "./room.model";

const createRoomIntoDB = async (payload: TRoom) => {
    const roomIsExists = await Room.isRoomExists(payload.roomNo, payload.floorNo);
    if (roomIsExists) {
        throw new AppError(httpStatus.BAD_REQUEST, 'This Room is Already Exists!')
    }
    const result = await Room.create(payload);
    return result;
}


export const RoomServices = {
    createRoomIntoDB,
}