import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly isSideMenuOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly isSideMenuComponentInitSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isSideMenuComponentInit$(): Observable<boolean> {
    return this.isSideMenuComponentInitSubject.asObservable();
  }
  set isSideMenuComponentInit$(value: boolean) {
    this.isSideMenuComponentInitSubject.next(value);
  }
  get isSideMenuOpen$(): Observable<boolean> {
    return this.isSideMenuOpenSubject.asObservable();
  }
  set isSideMenuOpen$(value: boolean) {
    this.isSideMenuOpenSubject.next(value);
  }
}
