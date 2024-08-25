import { z } from "zod";
import { meetingRoomAmenities } from "./room.constant";

const createRoomValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        roomNo: z.number(),
        floorNo: z.number(),
        capacity: z.number(),
        pricePerSlot: z.number(),
        amenities: z.array(z.enum([...meetingRoomAmenities] as [string, ...string[]])),
    })
});


export const RoomValidationSchema = {
    createRoomValidationSchema
}