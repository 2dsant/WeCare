import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProjetoService } from 'src/app/service/projeto.service';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.scss']
})
export class CadastroProjetoComponent implements OnInit {
  formProject: FormGroup;

  constructor(private formBuilder: FormBuilder, private _route: Router, private _projeto: ProjetoService) {
    this.formProject = this.formBuilder.group({
      id: [null],
      str_tituloProject: [null, [Validators.required, Validators.maxLength(100), Validators.minLength(5)]],
      str_desc: [null, [Validators.required, Validators.maxLength(10000), Validators.minLength(20)]],
      id_Usuario: [null],
      id_Ong: [null],
      dat_inicio: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      dat_final: [null]
    })
  }

  salvarFormulaio() {
    this._projeto.saveProjeto(this.formProject.value).then(() => {
      this._route.navigate(['/projeto'])
    })
  }

  ngOnInit(): void {
  }

}
