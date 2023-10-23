import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {pullFeedback} from '@shared/data-access/animations/animations';

@Component({
  standalone: true,
  selector: 'pull-to-refresh',
  templateUrl: './pull-to-refresh.component.html',
  styleUrls: ['./pull-to-refresh.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  animations: [pullFeedback],
})
export class PullToRefreshComponent {
  @Output() refresh = new EventEmitter<void>();
  @Input() isLoading = false;
  startY = 0;
  threshold = 350;
  distance = 0;

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    console.log('onTouchStart: ', event.touches[0].clientY);
    this.startY = event.touches[0].clientY;
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    this.distance = event.touches[0].clientY - this.startY;
    console.log('onTouchMove: ', this.distance);
    if (this.distance > this.threshold) {
      this.refresh.emit();
    }
  }
}
