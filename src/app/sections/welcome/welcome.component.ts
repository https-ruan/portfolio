import { Component, Renderer2 } from '@angular/core';
import { Constants } from '@core/constants';
import { picture, whoAmI } from './animations/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [whoAmI, picture],
})
export class WelcomeComponent {
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
