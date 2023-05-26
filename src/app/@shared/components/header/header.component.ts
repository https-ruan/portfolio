import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IsActiveMatchOptions, RouterModule } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxTypedJsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showCursor = true;
  public linkActivateOptions: IsActiveMatchOptions = {
    fragment: 'exact',
    matrixParams: 'ignored',
    paths: 'exact',
    queryParams: 'ignored',
  };
}
