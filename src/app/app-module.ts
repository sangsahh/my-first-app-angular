import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { App } from './app';
import { ServerComponent } from './server/server.component';
import { Servers } from './servers/servers';

@NgModule({
  declarations: [
    App,
    ServerComponent,
    Servers
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
