import {Injectable} from '@angular/core';
import {UserType} from '@user/data-access/model/user.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly userType = new BehaviorSubject<UserType | null>(null);

  selectUserType(type: UserType): void {
    this.userType.next(type);
  }

  get UserTypeState(): Observable<UserType> {
    return this.userType.asObservable() as Observable<UserType>;
  }
}
