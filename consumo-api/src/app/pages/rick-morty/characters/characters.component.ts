import { Component, OnInit } from '@angular/core';
import { Character, CharactersResponse } from 'src/app/models/rick-morty.model';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  
  charactersResponse?: CharactersResponse;
  characters?: Character[];
  selectedCharacter: any = null;

  constructor(private _rickMortyService: RickMortyService) {}

  //Al generar el documento
  ngOnInit(): void {
    this._rickMortyService.getCharacters().subscribe({
      next: (data: CharactersResponse) => {
        this.characters = data.results;
      },
    });
  }

  openModal(character: any) {
    this.selectedCharacter = character;
  }

  closeModal() {
    this.selectedCharacter = null;
  }


}
