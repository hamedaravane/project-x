import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  imports: [RouterOutlet],
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {}
