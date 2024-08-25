import { Model } from "mongoose";

export interface TUser {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role: 'admin' | 'user';
}


export interface UserModel extends Model<TUser> {
    isUserExistsByEmailAddress(email: string): Promise<TUser>;
}