import { Component, OnDestroy, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  color!: string;
  bgColor!: string;
  event!: Event;
  title = 'angular-button';
  counterAngular: number = 0;
  loadChildren: Promise<any> = loadRemoteModule({
    remoteEntry: 'http://localhost:3000/remoteEntry.js',
    remoteName: 'container',
    exposedModule: './Events',
  });

  ngOnInit(): void {
    this.loadChildren.then((res) => {
      res.addEvents((event: CustomEventInit) => {
        this.color = event.detail.color;
        this.bgColor = event.detail.bgColor;
      });
      this.event = res.customEvent('clickAngular')
    });
  }

  ngOnDestroy(): void {
    this.loadChildren.then((res) => res.deleteEvents());
  }

  addClick(): void {
    this.counterAngular++;
    window.dispatchEvent(this.event);
  }
}
