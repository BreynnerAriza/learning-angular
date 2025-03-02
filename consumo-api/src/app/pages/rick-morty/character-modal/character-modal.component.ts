import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.css']
})
export class CharacterModalComponent {

  @Input() character: any; // Recibe el personaje desde el padre
  @Output() close = new EventEmitter<void>(); // Para cerrar la modal

  closeModal() {
    this.close.emit();
  }

}
