import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  color!: string;
  bgColor!: string;
  title = 'angular-button';
  counterAngular: number = 0;

  ngOnInit(): void {
    window.addEventListener('changeColor5', (event: CustomEventInit) => {
      this.color = event.detail.color;
      this.bgColor = event.detail.bgColor;
      console.log(event);
    });
    window.addEventListener('changeColor10', (event: CustomEventInit) => {
      this.color = event.detail.color;
      this.bgColor = event.detail.bgColor;
    });
  }

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
