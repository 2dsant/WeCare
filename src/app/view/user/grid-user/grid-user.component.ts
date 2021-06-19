import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/interface/user';
import { ProjetoService } from 'src/app/service/projeto.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-grid-user',
  templateUrl: './grid-user.component.html',
  styleUrls: ['./grid-user.component.scss']
})
export class GridUserComponent implements OnInit {

  constructor(private _userService: UserService, private _snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['id', 'str_nome', 'str_celular', 'str_email'];

  dataSource: any;

  ngOnInit(): void {
    this._userService.getAllUsers().then((r) => {
      this.dataSource = r
      console.log(r);

    }).catch((r) => {
      this._snackBar.open(`Erro ao consultar Usuários. ${r.status} - ${r.statusText}`, 'Tudo bem')
    })
  }

  editUser(id: number): void {

  }

}
