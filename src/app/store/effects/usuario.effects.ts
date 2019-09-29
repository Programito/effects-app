import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
// convierte en observable
import { of } from 'rxjs';
import * as usuarioActions from '../actions';
import { map, mergeMap, catchError  } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public usuariosService: UsuarioService
    ) {}

     // @Effect({dispatch: false})
     @Effect()
    cargarUsuario$ = this.actions$
        .pipe(
            ofType(usuarioActions.CARGAR_USUARIO),
            mergeMap( (action) => this.usuariosService.getUserById(action['id'])
                 .pipe(
                     map (user => ({ type: usuarioActions.CARGAR_USUARIO_SUCCESS , usuario: user })),
                     catchError(error => of({ type: usuarioActions.CARGAR_USUARIO_FAIL, payload: error }))
                 )
            )
        );

}

