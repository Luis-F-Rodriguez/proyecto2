import { Component, VERSION } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  areas: any = ['Interno', 'Limpieza', 'Mantenimiento', 'Externo'];
  enfermedades: any = ['Respiratoria', 'Cardiaca', 'Cancer', 'Otros'];
  tipos: any = ['A RhD positivo (A+)', 'A RhD negativo (A-)','B RhD positivo (B+)','B RhD negativo (B-)','ORhD positivo (O+)','O RhD negativo (O-)','AB RhD positivo (AB+)','AB RhD negativo (AB-)'];
  numero1;
  numero2;
  numero3;
  numero4;
  numero5;
  numero6;
  mensaje:string;

  validar(){
    this.mensaje="";
    if(this.numero1<0  || this.numero3>100 ){this.mensaje+="Anios de trabajo invalido\n";}
    if(this.numero2<=0){this.mensaje+="Salario por hora invalido\n";}
    if(this.numero3<=0){this.mensaje+="Salario por mes invalido\n";}
    if(this.numero4<=0){this.mensaje+="Estatura invalida\n";}
    if(this.numero5<=0){this.mensaje+="Peso invalido\n";}
  }
}
//CI, número de empleado, años de trabajo, salario por hora y por mes,   estatura peso -->