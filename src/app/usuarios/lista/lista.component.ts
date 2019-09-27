import { Component, OnInit } from '@angular/core';
// import { UsuarioService } from '../../services/usuario.service';
import {Usuario} from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import {AppState} from '../../store/app.reducer';

import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // new actions.CargarUsuarios
    this.store.dispatch({type: usuariosActions.CARGAR_USUARIOS});
  }

  /*constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers()
      .subscribe(users => {
        this.usuarios = users;
      });
  }*/

}
