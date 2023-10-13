import {NgStyle} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  standalone: true,
  selector: 'skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  imports: [NgStyle],
})
export class SkeletonComponent {
  @Input() shape?: 'circle' | 'square' = 'square';
  @Input() width?: number | string = 50;
  @Input() height?: number | string = 15;
}
