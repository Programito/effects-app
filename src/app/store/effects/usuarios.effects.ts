import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
// convierte en observable
import { of } from 'rxjs';
import * as usuariosActions from '../actions';
import { map, mergeMap, catchError  } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

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
            mergeMap( () => this.usuariosService.getUsers()
                 .pipe(
                     map (users => ({ type: usuariosActions.CARGAR_USUARIOS_SUCCESS , usuario: users })),
                     catchError(error => of({ type: usuariosActions.CARGAR_USUARIOS_FAIL, payload: error }))
                 )
            )
        );

}

