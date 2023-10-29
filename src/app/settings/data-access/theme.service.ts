import {Injectable} from '@angular/core';
import {Theme} from '@settings/data-access/model/theme.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = Theme.LIGHT;
  private currentThemeSubject = new BehaviorSubject<Theme>(Theme.DARK);

  constructor() {
    const currentTheme = this.getCurrentTheme();
    this.setTheme(currentTheme as Theme);
  }

  get currentTheme$(): Observable<Theme> {
    return this.currentThemeSubject.asObservable();
  }

  public isLight(): boolean {
    return this.currentTheme === Theme.LIGHT;
  }

  public getCurrentTheme(): string {
    const dataTheme = document.documentElement.getAttribute('data-theme');
    if (dataTheme) this.currentTheme = dataTheme as Theme;
    const tokenTheme = localStorage.getItem('theme');
    if (tokenTheme) this.currentTheme = tokenTheme as Theme;
    return this.currentTheme;
  }

  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.currentThemeSubject.next(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  public toggleTheme(): void {
    this.currentTheme = this.reverseTheme(this.currentTheme);
    this.setTheme(this.currentTheme);
  }

  private reverseTheme(theme: string): Theme {
    return theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
  }
}
