import { Router } from "express"
import validateRequest from "../../middleware/vaildRequest"
import { bookingValidationSchema } from "./booking.validation"
import { BookingControllers } from "./booking.controller"

const route = Router()

route.post(
    '/create-booking',
    validateRequest(bookingValidationSchema.createBookingValidationSchema),
    BookingControllers.createBooking
)

route.get(
    '/',
    BookingControllers.getAllBookings
)

route.put(
    '/:bookingId',
    BookingControllers.updateBookings
)

route.delete(
    '/:bookingId',
    BookingControllers.deleteBookings
)

export const BookingRouts = route