import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule  } from '@ionic/angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DisableDirective } from './disable.directive';

@NgModule({
  imports:      [ IonicModule.forRoot(),BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DisableDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
