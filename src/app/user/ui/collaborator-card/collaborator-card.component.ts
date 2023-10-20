import {NgIf, NgOptimizedImage} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CollaborationModel} from '@user/data-access/model/collaborations.model';
import {NzRateModule} from 'ng-zorro-antd/rate';

@Component({
  standalone: true,
  selector: 'app-collaborator-card',
  templateUrl: './collaborator-card.component.html',
  styleUrls: ['./collaborator-card.component.scss'],
  imports: [NgIf, NgOptimizedImage, NzRateModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollaboratorCardComponent {
  @Input() collaboratorData!: CollaborationModel;
}
