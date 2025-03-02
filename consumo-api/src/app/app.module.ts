import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/rick-morty/characters/characters.component';
import { HomeComponent } from './pages/rick-morty/home/home.component';
import { RouterModule } from '@angular/router';
import { CharacterModalComponent } from './pages/rick-morty/character-modal/character-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HomeComponent,    
    CharacterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
