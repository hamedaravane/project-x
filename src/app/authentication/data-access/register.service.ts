import {Injectable} from '@angular/core';
import {UserTypeDetail} from '@user/data-access/model/user.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly userTypeSubject = new BehaviorSubject<UserTypeDetail | null>(null);

  get userType$(): Observable<UserTypeDetail> {
    return this.userTypeSubject.asObservable() as Observable<UserTypeDetail>;
  }
  set userType$(type: UserTypeDetail) {
    this.userTypeSubject.next(type);
  }
}
