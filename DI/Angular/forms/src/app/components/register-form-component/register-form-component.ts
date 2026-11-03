import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register-form-component',
  styleUrl: './register-form-component.css',
  templateUrl: './register-form-component.html',
})
export class RegisterFormComponent {
  nombre = '';
  apellidos = '';
  nif = '';
  email = '';
  telefono = '';
  sexo = '';
  conocioPagina = '';
  contrasena = '';
  confirmarContrasena = '';
  terminos = false;

  sendForm() {
    console.log('Nombre:', this.nombre);
    console.log('Apellidos:', this.apellidos);
    console.log('NIF:', this.nif);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Sexo:', this.sexo);
    console.log('¿Cómo conociste la página?:', this.conocioPagina);
    console.log('Contraseña:', this.contrasena);
    console.log('Confirmar contraseña:', this.confirmarContrasena);

    if (this.terminos) {
      console.log('Acepta los términos y condiciones');
    }
    console.log('No acepta los términos y condiciones');
  }
}
