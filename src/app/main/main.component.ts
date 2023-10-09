import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [RouterOutlet],
})
export class MainComponent {}
