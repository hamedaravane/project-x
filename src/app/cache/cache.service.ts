import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private readonly cache = new Map<string, any>();
  private readonly cacheInvalidationSubject = new Subject<string>();

  cacheInvalidation$ = this.cacheInvalidationSubject.asObservable();

  get(key: string): any {
    return this.cache.get(key);
  }

  set(key: string, data: any): void {
    this.cache.set(key, data);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(key: string): void {
    this.cache.delete(key);
  }

  clearAll(): void {
    this.cache.clear();
  }

  invalidateCache(key: string): void {
    this.cache.delete(key);
    this.cacheInvalidationSubject.next(key);
  }
}
