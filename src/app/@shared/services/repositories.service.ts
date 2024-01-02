import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Constants } from '@core/constants';
import { IRepository } from '@shared/interfaces';

@Injectable()
export class RepositoriesService {
  private readonly _baseURL = '/github';
  private readonly _http = inject(HttpClient);

  public getRepositories() {
    return this._http.get<IRepository[]>(
      `${this._baseURL}/users/${Constants.myself.infos.github}/repos?sort=updated`
    );
  }
}
