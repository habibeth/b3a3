import { Router } from "express";
import { SlotsControllers } from "./slots.controller";
import validateRequest from "../../middleware/vaildRequest";
import { SlotsValidation } from "./slots.validation";


const route = Router();

route.post(
    '/create-slots',
    validateRequest(SlotsValidation.createSlotsValidationSchema),
    SlotsControllers.createSlots
)

route.get(
    '/availability',
    SlotsControllers.getAllSlots
)


export const SlotsRoutes = route