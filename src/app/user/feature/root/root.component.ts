import {Component, OnInit, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CollaborationsService} from '@user/data-access/collaborations.service';

@Component({
  standalone: true,
  selector: 'user-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  imports: [RouterOutlet],
})
export class RootComponent implements OnInit {
  private readonly collaborationsService: CollaborationsService = inject(CollaborationsService);

  ngOnInit(): void {
    this.collaborationsService.getCollaborationsData().then();
  }
}
