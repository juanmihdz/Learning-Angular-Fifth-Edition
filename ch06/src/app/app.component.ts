import { Component, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings } from './app.settings';
import { Observable } from 'rxjs';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductListComponent,
    CopyrightDirective,
    KeyLoggerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'World';
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });  
  settings = inject(APP_SETTINGS);
  
  private setTitle = () => {
    const timestamp = new Date();
    this.title = `${this.settings.title} (${timestamp})`;
    // this._changes.detectChanges(); --> con signals no hace falta hacer esto sin signals si, sino no vemos los cambios reflejados
  }

  constructor(private _changes : ChangeDetectorRef) {
    this.title$.subscribe(this.setTitle);
  }
  
}
