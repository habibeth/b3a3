import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingServices } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
    const bookingData = req.body;

    const result = await BookingServices.createBookingIntoDB(
        bookingData
    );

    sendResponse(res, {
        message: 'Booking created successfully!',
        data: result,
    });
});


const getAllBookings = catchAsync(async (req, res) => {
    const result = await BookingServices.getAllBookingFromDB(req.query);
    sendResponse(res, {
        message: "All bookings retrieved successfully",
        data: result
    })
})

const getMyBookings = catchAsync(async (req, res) => {
    const email = req?.user?.email
    const result = await BookingServices.getMyBookingFromDB(email);
    sendResponse(res, {
        message: "User bookings retrieved successfully",
        data: result
    })
})

export const BookingControllers = {
    createBooking,
    getAllBookings,
    getMyBookings
}