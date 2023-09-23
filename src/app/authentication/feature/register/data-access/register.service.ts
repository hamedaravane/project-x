import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserType} from './type';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly userType = new BehaviorSubject<UserType | null>(null);

  selectUserType(type: UserType) {
    this.userType.next(type);
  }

  get UserTypeState(): Observable<UserType> {
    return this.userType.asObservable() as Observable<UserType>;
  }
}
