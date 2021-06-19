import { Component, OnInit } from '@angular/core';
import { ProjetoService } from 'src/app/service/projeto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _projetosService: ProjetoService) { }

  albumProjects: any
  commentsFake: any;

  ngOnInit(): void {
    this._projetosService.getProjetosFake().then((response) =>{
      this.albumProjects = response
      console.log(response);
    })

  }

}
