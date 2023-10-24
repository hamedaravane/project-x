import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

/**
 * Service to manage caching with features like LRU (Least Recently Used) eviction strategy,
 * cache invalidation, and maximum size limits.
 */
@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private readonly MAX_SIZE: number = 100;
  private readonly TTL: number = 60000;
  private readonly cache = new Map<string, any>();
  private readonly cacheInvalidationSubject = new Subject<string>();

  cacheInvalidation$ = this.cacheInvalidationSubject.asObservable();

  /**
   * Retrieves a value from the cache by key.
   *
   * @template T - Type of the cached item.
   * @param {string} key - Key for the cached item.
   * @returns {T | null} - Returns cached item if available and not expired, otherwise null.
   */
  get<T>(key: string): T | null {
    if (!this.cache.has(key)) {
      return null;
    }

    const cached = this.cache.get(key);

    const now = Date.now();
    if (cached.expiry < now) {
      this.cache.delete(key);
      return null;
    }

    cached.lastAccessed = now;
    return cached.value as T;
  }

  /**
   * Adds or updates an item in the cache.
   *
   * @template T - Type of the item to cache.
   * @param {string} key - Key for the cached item.
   * @param {T} value - Item to cache.
   * @param {number} [ttl=this.TTL] - Time (in milliseconds) the item remains in the cache. Defaults to TTL.
   */
  set<T>(key: string, value: T, ttl: number = this.TTL): void {
    if (this.cache.size >= this.MAX_SIZE) {
      this.evictLRU();
    }

    const expiry = Date.now() + ttl;
    this.cache.set(key, {value, expiry, lastAccessed: Date.now()});
  }

  /**
   * Removes the least recently used item from the cache.
   * This method is private and used internally when the cache reaches its maximum size.
   *
   * @private
   */
  private evictLRU(): void {
    let oldest = Date.now();
    let oldestKey: string | null = null;

    for (const [key, item] of this.cache.entries()) {
      if (item.lastAccessed < oldest) {
        oldest = item.lastAccessed;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  /**
   * @deprecated
   * Checks if an item exists in the cache by its key.
   *
   * @param {string} key - Key to check in the cache.
   * @returns {boolean} - Returns true if the key exists, otherwise false.
   */
  has(key: string): boolean {
    return this.cache.has(key);
  }

  /**
   * Removes an item from the cache by its key.
   *
   * @param {string} key - Key for the cached item to remove.
   */
  clear(key: string): void {
    this.cache.delete(key);
  }

  /**
   * Clears all items from the cache.
   */
  clearAll(): void {
    this.cache.clear();
  }

  /**
   * Invalidates (removes) an item from the cache by its key and notifies subscribers.
   *
   * @param {string} key - Key for the cached item to invalidate.
   */
  invalidateCache(key: string): void {
    this.cache.delete(key);
    this.cacheInvalidationSubject.next(key);
  }
}
