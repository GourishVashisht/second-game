import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondGameComponent } from './second-game.component';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [SecondGameComponent]
})
export class SecondGameModule implements DoBootstrap{ 
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const el = createCustomElement(SecondGameComponent, {
      injector: this.injector,
    });

    customElements.define('second-game', el);
  }
}
