import {UserModel} from '../user.model';

export class UserFilterService {
  users: UserModel[] = [];
 constructor() {
 }
 searchUser(users: UserModel[], id, name, email): UserModel[] {
  this.users = users;
  let reqUsers;
  if (id !== null || name !== '' || email !== '') {
   reqUsers = this.searchByAll(id, name, email);
   return reqUsers;
  }
 }
 searchByAll = (id, name, email) => {
   const reqUser: UserModel[] = this.users.filter((user) => user.userId === id || user.name.first === name || user.email === email);
   console.log(reqUser);
   return reqUser;
 }
 statusUser(users: UserModel[], status): UserModel[]{
   return users.filter((user) => user.status === status);
 }
}
