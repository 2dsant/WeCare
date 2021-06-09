import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-user',
  templateUrl: './formulario-user.component.html',
  styleUrls: ['./formulario-user.component.scss']
})
export class FormularioUserComponent implements OnInit {

  formUser: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formUser = this.formBuilder.group({
      id: [null],
      str_nome: [null, [Validators.required, Validators.maxLength(100), Validators.minLength(5)]],
      str_celular: [null, [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      str_email: [null, [Validators.required, Validators.email, Validators.maxLength(100)]],
      str_genero: [null, [Validators.required]],
      str_cgc: [null, [Validators.required, Validators.maxLength(18)]],
      str_tipo: [null, [Validators.required]],
      dat_nasc: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      endereco: this.formBuilder.group({
        id: [null],
        str_cep: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        str_logradouro: [null, [Validators.required, Validators.maxLength(100)]],
        str_bairro: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
        str_numero: [null, [Validators.required, Validators.maxLength(20)]],
        str_cidade: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
        str_estado: [null, [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
        str_origem: [null],
      })
    })
  }

  ngOnInit(): void {

  }

}
