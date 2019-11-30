import { IUser } from '../../models/user.interface';

export  interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  users: [
    {id: 1, name: 'Ivan', cardNumber: '111', cardType: 'internal'},
    {id: 2, name: 'Petro', cardNumber: '112', cardType: 'gold'},
    {id: 3, name: 'Andriy', cardNumber: '113', cardType: 'internal'},
    {id: 4, name: 'Volodymyr', cardNumber: '114', cardType: 'gold'}
  ],
  selectedUser: {id: 2, name: 'Petro', cardNumber: '112', cardType: 'gold'}
};
