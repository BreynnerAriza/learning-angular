import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharactersResponse } from '../models/rick-morty.model';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private _httpClient: HttpClient) {}

  getCharacters() : Observable<CharactersResponse> {
    return this._httpClient.get<CharactersResponse>(`${this.baseUrl}/character`);
  }

  getCharacterById(id: number): Observable<Character> {
    return this._httpClient.get<Character>(`${this.baseUrl}/character/${id}`);
  }


}
