import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjetoService } from 'src/app/service/projeto.service';

@Component({
  selector: 'app-forum-grid',
  templateUrl: './forum-grid.component.html',
  styleUrls: ['./forum-grid.component.scss']
})
export class ForumGridComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _projetosService: ProjetoService) { }

  displayedColumns: string[] = ['id',  'title', 'completed'];
  
  dataSource: any

  ngOnInit(): void {

    this._projetosService.getForumFake().then((response) =>{
      this.dataSource = response
      console.log(response);
    })
    // this._projetoService.getAllProjetos().then((r) =>{
    //   this.dataSource = r
    // }).catch((r) =>{
    //   this._snackBar.open(`Erro ao consultar Projetos. ${r.status} - ${r.statusText}`, 'Tudo bem')
    // })
  }


}
