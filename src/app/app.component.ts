import {Component, inject} from '@angular/core';
import {Theme} from '@settings/data-access/model/theme.model';
import {ThemeService} from '@settings/data-access/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-x';
  private readonly themeService: ThemeService = inject(ThemeService);

  constructor() {
    this.themeService.setTheme(this.themeService.getCurrentTheme() as Theme);
  }
}
