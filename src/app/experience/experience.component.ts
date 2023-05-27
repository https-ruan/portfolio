import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {}
