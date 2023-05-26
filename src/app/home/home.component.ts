import { Component, Renderer2 } from '@angular/core';
import { Constants } from '@core/constants';
import { whoAmI, picture } from './animations/animations';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [whoAmI, picture],
})
export class HomeComponent {
  public myself: any = Constants.myself.resume;
  public photoIsOpen = false;

  constructor(private readonly _r2: Renderer2) {}

  public showMe(button: HTMLButtonElement) {
    const runningSound = new Audio('assets/welcome/running.mp3');
    runningSound.play();
    this.photoIsOpen = true;
  }

  public playMarioSound(textBlock: HTMLElement) {
    const coin = textBlock.lastChild;

    this._r2.addClass(textBlock, 'up');

    // Generate a random position to coin
    const x = Math.floor(Math.random() * textBlock.offsetWidth);
    const y = Math.floor(Math.random() * textBlock.offsetHeight);
    this._r2.setStyle(
      coin,
      'transform',
      `translate(${x}px, ${y % 2 !== 0 ? -y : y}px)`
    );

    const coinSound = new Audio('assets/welcome/mario-coin.mp3');
    coinSound.play();

    setTimeout(() => {
      this._r2.removeClass(textBlock, 'up');
    }, 300);
  }
}
