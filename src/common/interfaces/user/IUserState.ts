import { IUser } from '../';

export interface IUserState {
  UserByUserName: { [username: string]: IUser };
  UserByEmail: { [email: string]: IUser };
}
