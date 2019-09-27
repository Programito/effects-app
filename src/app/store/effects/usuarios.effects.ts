import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as usuariosActions from '../actions';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { CARGAR_USUARIOS_SUCCESS } from '../actions/usuarios.actions';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        public usuariosService: UsuarioService
    ) {}

     // @Effect({dispatch: false})
     @Effect()
    cargarUsuarios$ = this.actions$
        .pipe(
            ofType(usuariosActions.CARGAR_USUARIOS),
            /*map(action => {
                console.log(action);
                return action;
            })*/
           // switchMap(() => {
            mergeMap( () => this.usuariosService.getUsers()
                 .pipe(
                     // map(users => new usuariosActions.CARGAR_USUARIOS_SUCCESS(users));
                     map (users => ({ type: usuariosActions.CARGAR_USUARIOS_SUCCESS , usuario: users }))
                 )
            )
        );

}
