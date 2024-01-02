import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Constants } from '@core/constants';
import { ELanguages } from '@core/i18n';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-networks',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatTooltipModule],
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
    switch (this.currentLng) {
      case ELanguages.ptBR:
        this._translateService.use(ELanguages.enUS);
        break;
      default:
        this._translateService.use(ELanguages.ptBR);
        break;
    }
  }
}
