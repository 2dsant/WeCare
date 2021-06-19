import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Projeto } from 'src/app/interface/projeto';
import { ProjetoService } from 'src/app/service/projeto.service';

@Component({
  selector: 'app-projeto-grid',
  templateUrl: './projeto-grid.component.html',
  styleUrls: ['./projeto-grid.component.scss']
})
export class ProjetoGridComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _projetosService: ProjetoService) { }

  displayedColumns: string[] = ['id', 'str_tituloProject', 'str_desc', 'dat_inicio', 'actions'];

  dataSource: any

  ngOnInit(): void {

    this._projetosService.getAllProjetos().then((response) => {
      this.dataSource = response

      console.log(response);
    })

  }

}
