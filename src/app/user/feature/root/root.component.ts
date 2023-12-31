import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'user-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  imports: [RouterOutlet],
})
export class RootComponent {}
