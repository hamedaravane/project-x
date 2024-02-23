import {Injectable, inject} from '@angular/core';
import {UserDataService} from '@user/data-access/user.data.service';
import {BehaviorSubject, filter} from 'rxjs';
import {userDtoToEntity, UserEntity} from '@user/data-access/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userDataService: UserDataService = inject(UserDataService);
  private readonly userSubject = new BehaviorSubject<UserEntity | null>(null);
  currentUser$ = this.userSubject.asObservable().pipe(filter(Boolean));
  authTokenKey = 'authToken';
  currentUserKey = 'currentUser';

  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey) || sessionStorage.getItem(this.authTokenKey);
  }

  getCurrentUser(): void {
    const userJson = localStorage.getItem(this.currentUserKey) || sessionStorage.getItem(this.currentUserKey);
    this.userSubject.next(userJson ? userDtoToEntity(JSON.parse(userJson)) : null);
  }
}
