import { MOSTRAR_CITAS, BORRAR_CITA, AGREGAR_CITA } from '../actions/types';

// cada reducer tiene su propio state
const initialState = {
    citas: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case MOSTRAR_CITAS:
            return {
                ...state
            }
        case BORRAR_CITA:
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }
        case AGREGAR_CITA:
            return {
                ...state,
                citas: [...state.citas, action.payload]
            }
 
        default:
            return state;
    }
}
