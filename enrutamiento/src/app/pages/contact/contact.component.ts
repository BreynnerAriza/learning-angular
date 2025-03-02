import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  formularioContacto : FormGroup;

  constructor(private _form : FormBuilder){
    this.formularioContacto = this._form.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(){
    this.formularioContacto.get('name')?.setValue('Juan');
    this.formularioContacto.get('name')?.disable();
  }
  
  hasError(name: string, errorType: string){
    return this.formularioContacto.get(name)?.hasError(errorType) && this.formularioContacto.get(name)?.touched;
  }

  enviar(){
    console.log(this.formularioContacto);
    console.log(this.formularioContacto);
  }




  /*
  // Formulario de plantilla
  user : any = {
    name: '',
    email: '',    
  }

  enviar(){
    console.log(this.user);    
  }
  */
}
