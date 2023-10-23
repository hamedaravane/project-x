import {NgIf} from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  inject,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'pull-to-refresh',
  templateUrl: './pull-to-refresh.component.html',
  styleUrls: ['./pull-to-refresh.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
})
export class PullToRefreshComponent {
  private readonly ref: ChangeDetectorRef = inject(ChangeDetectorRef);
  @Output() refresh = new EventEmitter<void>();
  @Input() set isLoading(value: boolean) {
    this._isLoading = value;
    if (!value) {
      this.distance = 0;
    }
  }
  _isLoading = false;
  startY = 0;
  threshold = 150;
  distance = 0;

  @HostListener('body:touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.startY = event.touches[0].clientY;
  }

  @HostListener('body:touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    this.distance = event.touches[0].clientY - this.startY;
    if (this.distance > this.threshold) {
      this.refresh.emit();
    }
  }
}
