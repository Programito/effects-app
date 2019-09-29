// se refiere al index.ts
import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';
import { usuarioReducer } from './reducers/usuario.reducer';

export interface AppState {
    usuarios: reducers.UsuariosState;
    usuario: reducers.UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer,
    usuario: reducers.usuarioReducer
};

