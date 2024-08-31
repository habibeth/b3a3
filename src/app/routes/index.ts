import { Router } from "express"
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { RoomRoutes } from "../modules/room/room.route";
import { SlotsRoutes } from "../modules/Slots/slots.route";


const router = Router()

const moduleRoutes = [
    {
        path: '/auth',
        route: UserRoutes,
    },
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/rooms',
        route: RoomRoutes,
    },
    {
        path: '/slots',
        route: SlotsRoutes,
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;

