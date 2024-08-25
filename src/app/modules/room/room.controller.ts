import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RoomServices } from "./room.service";


const createRoom = catchAsync(async (req, res) => {
    const roomData = req.body;

    const result = await RoomServices.createRoomIntoDB(
        roomData
    );

    sendResponse(res, {
        message: 'Room added successfully',
        data: result,
    });
});

export const RoomControllers = {
    createRoom
}