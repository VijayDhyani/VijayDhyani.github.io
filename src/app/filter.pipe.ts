import { Pipe, PipeTransform } from '@angular/core';
import {UserModel} from './user.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 result: UserModel[];
  transform(value: any, id ): UserModel[] {
    for (const user of value) {
      if (user.getStatus() === id) {
        this.result.push(user);
      }
      return this.result;
    }
  }

}
