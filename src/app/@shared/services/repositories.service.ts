import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Constants } from '@core/constants';
import { IRepository } from '@shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  private readonly _baseURL = '/github';
  private readonly _http = inject(HttpClient);

  private _repositories: IRepository[] = [];
  public get repositories() {
    return this._repositories;
  }
  public set repositories(repos: IRepository[]) {
    this._repositories = repos;
  }

  public getRepositories() {
    this._http
      .get<IRepository[]>(
        `${this._baseURL}/users/${Constants.myself.infos.github}/repos?sort=updated`
      )
      .pipe(takeUntilDestroyed())
      .subscribe((repos) => {
        this.repositories = repos;
      });
  }
}
