import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.scss']
})
export class ArquivoComponent implements OnInit {
  formArquivo: FormGroup;

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService) {
    this.formArquivo = this.formBuilder.group({
      id: [null],
      str_dir: [null],
      str_desc_ft: [null],
      id_projeto: [null],
      str_origem: [null],
      id_origem: [null]
    })
  }

  ngOnInit(): void {
  }

  salvarFormulario() {
    console.log(this.formArquivo);
  }
}
