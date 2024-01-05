import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepositoriesService } from '@shared/services/repositories.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  private readonly _repositoriesService = inject(RepositoriesService);

  public repositories = this._repositoriesService.repositories;
}
