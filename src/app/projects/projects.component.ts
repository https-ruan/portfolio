import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {}
