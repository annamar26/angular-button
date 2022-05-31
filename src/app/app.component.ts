import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  @Input() color!: string;
  title = 'angular-button';
  counterAngular: number = 0;
  addClick(): void {
    this.counterAngular++;
    const angularEvent = new CustomEvent('clickAngular', {
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    window.dispatchEvent(angularEvent);
  }
}
