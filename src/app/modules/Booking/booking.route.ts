import { Router } from "express"
import validateRequest from "../../middleware/vaildRequest"
import { bookingValidationSchema } from "./booking.validation"
import { BookingControllers } from "./booking.controller"
import auth from "../../middleware/auth"
import { USER_ROLE } from "../user/user.constant"

const route = Router()

route.post(
    '/create-booking',
    validateRequest(bookingValidationSchema.createBookingValidationSchema),
    BookingControllers.createBooking
)

route.get(
    '/my-bookings',
    auth(USER_ROLE.admin, USER_ROLE.user),
    BookingControllers.getMyBookings
)

route.get(
    '/',
    BookingControllers.getAllBookings
)

export const BookingRouts = route