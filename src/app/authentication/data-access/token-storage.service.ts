import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  readonly APP_PREFIX: string = 'APP';
  accessTokenKey = 'accessToken';
  refreshTokenKey = 'refreshToken';

  getAccessToken(): string {
    return this.getItem(this.accessTokenKey) as string;
  }

  saveAccessToken(token: string): void {
    this.setItem(this.accessTokenKey, token);
  }

  getRefreshToken(): string {
    return this.getItem(this.refreshTokenKey) as string;
  }

  saveRefreshToken(token: string): void {
    this.setItem(this.refreshTokenKey, token);
  }

  saveTokens(accessToken: string, refreshToken: string): void {
    this.saveAccessToken(accessToken);
    this.saveRefreshToken(refreshToken);
  }

  removeTokens(): void {
    this.removeItem(this.accessTokenKey);
    this.removeItem(this.refreshTokenKey);
  }

  /**
   * Sets item in local storage
   *
   * @param {string} key
   * @param {unknown} value
   */
  setItem(key: string, value: unknown): void {
    try {
      localStorage.setItem(
        `${this.APP_PREFIX}${key}`,
        JSON.stringify(value)
      );
    } catch (e) {
      localStorage.setItem(`${this.APP_PREFIX}${key}`, value as string);
    }
  }

  /**
   * Gets item from local storage by key
   *
   * @param {string} key
   * @return {*}  {unknown}
   */
  getItem(key: string): unknown {
    const value = localStorage.getItem(`${this.APP_PREFIX}${key}`);
    try {
      return JSON.parse(value as string);
    } catch (e) {
      return value;
    }
  }

  /**
   * Removes item from local storage by key
   *
   * @param {string} key
   */
  removeItem(key: string): void {
    localStorage.removeItem(`${this.APP_PREFIX}${key}`);
  }
}
