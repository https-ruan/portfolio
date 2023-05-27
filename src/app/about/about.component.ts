import { Component } from '@angular/core';
import { Constants } from '@core/constants';
import { ICountUpOptions } from '@shared/interfaces';
import { SharedModule } from '@shared/shared.module';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public myself = Constants.myself;
  public countOptions: ICountUpOptions = {
    startVal: 0,
    duration: 5,
    prefix: '+',
  };
}
