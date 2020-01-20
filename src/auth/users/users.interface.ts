import { Document } from 'mongoose';

export interface IAuthUser extends Document {
  readonly username: string;
  readonly password: string;
}

export interface IUser {
  readonly username: string;
  readonly password: string;
}