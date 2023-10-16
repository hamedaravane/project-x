import {Injectable, inject} from '@angular/core';
import {EventType, Router, Scroll} from '@angular/router';
import {Observable, filter, map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private readonly routerLink: Router = inject(Router);

  isRoot(): boolean {
    return [...this.routerLink.routerState.snapshot.url].filter(value => value === '/').length < 2;
  }

  get isRoot$(): Observable<boolean> {
    return this.routerLink.events.pipe(
      filter(event => event.type === EventType.Scroll),
      map(event => {
        const scroll = event as Scroll;
        const urlSegments: string = scroll.routerEvent.url;
        const urlSegmentsArray: string[] = urlSegments.split('/');
        return urlSegmentsArray.length > 2;
      }),
    );
  }

  currentRoute(): string {
    return this.routerLink.routerState.snapshot.url;
  }
}
