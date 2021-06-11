import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.scss']
})
export class PostagemComponent implements OnInit {
  formPostagem: FormGroup;

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService) {
    this.formPostagem = this.formBuilder.group({
      id: [null],
      str_texto: [null, [Validators.required, Validators.maxLength(500), Validators.minLength(10)]],
      id_usuario: [null],
      dat_data: [null],
    })
  }

  ngOnInit(): void {
  }

  salvarFormulaio() {
    console.log(this.formPostagem);
  }
}
