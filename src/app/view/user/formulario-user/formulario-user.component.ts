import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnderecoDto } from 'src/app/models/endereco.dto';
import { BuscaCepService } from 'src/app/service/busca-cep.service';

@Component({
  selector: 'app-formulario-user',
  templateUrl: './formulario-user.component.html',
  styleUrls: ['./formulario-user.component.scss']
})
export class FormularioUserComponent implements OnInit {

  formUser: FormGroup;

  generoSelect: Array<any> = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
    { label: 'Outros', value: 'O' },
    { label: 'Prefiro não informar', value: 'N' }
  ];

  tipoSelect: Array<any> = [
    { label: 'Pessoa Física', value: 'F' },
    { label: 'Pessoa Juridica', value: 'J' },
    { label: 'Beneficiario', value: 'B' }
  ];

  configCgc: any = { name: null, mask: null };

  constructor(private formBuilder: FormBuilder, private buscaCep: BuscaCepService, private spinner: NgxSpinnerService) {
    this.formUser = this.formBuilder.group({
      id: [null],
      str_nome: [null, [Validators.required, Validators.maxLength(100), Validators.minLength(5)]],
      str_celular: [null, [Validators.required, Validators.maxLength(16), Validators.minLength(8)]],
      str_email: [null, [Validators.required, Validators.email, Validators.maxLength(100)]],
      str_genero: [null, [Validators.required]],
      str_cgc: [null, [Validators.required, Validators.maxLength(18)]],
      str_tipo: [null, [Validators.required]],
      dat_nasc: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      endereco: this.formBuilder.group({
        id: [null],
        str_cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
        str_logradouro: [null, [Validators.required, Validators.maxLength(100)]],
        str_complemento: [null, [Validators.required, Validators.maxLength(100)]],
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

  getCep(): void {
    this.spinner.show()
    this.buscaCep.buscaCep(this.formUser.get('endereco.str_cep')?.value)
      .then((response: EnderecoDto) => {
        this.formUser.get('endereco.str_logradouro')?.setValue(response.logradouro)
        this.formUser.get('endereco.str_bairro')?.setValue(response.bairro)
        this.formUser.get('endereco.str_cidade')?.setValue(response.localidade)
        this.formUser.get('endereco.str_estado')?.setValue(response.uf)
      })
      .catch(() => alert('Erro ao buscar cep'))
      .finally(() => this.spinner.hide())
  }

  salvarFormulaio() {
    console.log(this.formUser);
  }

  getTipoSelect() {

    if (this.formUser.get('str_tipo')?.value == 'F' || this.formUser.get('str_tipo')?.value == 'B') {
      this.configCgc = { name: 'CPF', mask: '000.000.000-00' }
    } else if (this.formUser.get('str_tipo')?.value == 'J') {
      this.configCgc = { name: 'CNPJ', mask: '00.000.000/0000-00' }
    }
  }
}
