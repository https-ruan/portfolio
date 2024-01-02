import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IRepository } from '@shared/interfaces';
import { RepositoriesService } from '@shared/services/repositories.service';
import { SharedModule } from '@shared/shared.module';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  providers: [RepositoriesService],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  private readonly _repositoriesService = inject(RepositoriesService);

  public repositories$: Observable<IRepository[]> = this._repositoriesService
    .getRepositories()
    .pipe(takeUntilDestroyed(), );

  public filters: string[] = [];

}
