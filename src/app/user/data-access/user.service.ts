import {User} from '@user/data-access/model/user.model';
import {UserDataService} from '@user/data-access/user.data.service';
import {BehaviorSubject, Observable, Subject, lastValueFrom} from 'rxjs';
import {Injectable, inject} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userDataService: UserDataService = inject(UserDataService);
  private readonly userSubject: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);

  get user$(): Observable<User> {
    return this.userSubject.asObservable();
  }
  set user$(value: User) {
    this.userSubject.next(value);
  }

  async getUserData(): Promise<void> {
    this.user$ = await lastValueFrom(this.userDataService.getMockUserInfo());
  }
}
