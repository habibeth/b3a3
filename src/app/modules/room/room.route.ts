import { Router } from "express";
import { RoomControllers } from "./room.controller";
import validateRequest from "../../middleware/vaildRequest";
import { RoomValidationSchema } from "./room.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";



const route = Router();

route.post(
    '/create-room',
    auth(USER_ROLE.admin),
    validateRequest(RoomValidationSchema.createRoomValidationSchema),
    RoomControllers.createRoom
)




export const RoomRoutes = route