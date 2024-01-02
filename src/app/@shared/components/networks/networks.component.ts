import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Constants } from '@core/constants';
import { ELanguages } from '@core/i18n';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-networks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss'],
})
export class NetworksComponent {
  public myself = Constants.myself;
  public languages = ELanguages;
  public get currentLng() {
    return this._translateService.currentLang;
  }

  constructor(private readonly _translateService: TranslateService) {}

  public changeLng(): void {
    if (this.currentLng === ELanguages.ptBR) {
      this._translateService.use(ELanguages.enUS);
    } else {
      this._translateService.use(ELanguages.ptBR);
    }
  }
}
