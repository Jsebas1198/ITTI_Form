import { IUser } from '../interfaces/User/IUser';

export default class MUser {
  public userId: number;
  public id: number;
  public title: string;
  public completed: boolean;

  constructor(user: IUser) {
    this.userId = user.userId;
    this.id = user.id;
    this.title = user.title;
    this.completed = user.completed;
  }
}
