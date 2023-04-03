import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms-exercicio',
  templateUrl: './forms-exercicio.component.html',
  styleUrls: ['./forms-exercicio.component.css']
})
export class FormsExercicioComponent implements OnInit {
  form: FormGroup;
  resultado: number=0;
  classificacao: string='';
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      peso: new FormControl('', [Validators.required, Validators.min(1), Validators.max(500)]),
      altura: new FormControl('', [Validators.required, Validators.min(0.01), Validators.max(3)])  
    })
  }

  onSubmit(form){
    this.resultado = Number((form.value.peso / (form.value.altura * form.value.altura)).toFixed(2));
    if(this.resultado < 18.5){
      this.classificacao = "Abaixo do peso normal"
    }
    else if(this.resultado > 18.5 && this.resultado < 24.9){
      this.classificacao = "Peso  normal"

    }
    else if(this.resultado > 25 && this.resultado < 29.9){
      this.classificacao = "Excesso de peso"

    }
    else if(this.resultado > 30 && this.resultado < 34.9){
      this.classificacao = "Obesidade classe I"

    }
    else if(this.resultado > 35 && this.resultado < 39.9){
      this.classificacao = "Obesidade classe II"

    }
    else if(this.resultado >= 40){
      this.classificacao = "Obesidade classe III"
    }
  }
}
