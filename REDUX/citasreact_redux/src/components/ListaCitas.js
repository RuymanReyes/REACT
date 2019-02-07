import React, {Component} from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

/** Connect de Redux */
import { connect } from 'react-redux';
import { getCitas } from '../actions/citasActions';

import store from '../store';


store.subscribe( () => {
    localStorage.setItem('citas', JSON.stringify(store.getState()))
});

class ListaCitas extends Component {

    componentDidMount() {
        this.props.getCitas();
    }

    render() {

        const citas = this.props;
        console.log(citas.citas);
        const mensaje = Object.keys(citas.citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí';

        return (
                <div className="card mt-5">
                    <div className="card-body">
                        <h2 className="card-title text-center">{mensaje}</h2>
                        <div className="lista-citas">
                                {Object.keys(this.props.citas).map(cita => (
                                    <Cita
                                        key={cita}
                                        info={this.props.citas[cita] }
                                        idCita={cita}
                                        borrarCita={this.props.borrarCita}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
         )
    }
}

ListaCitas.propTypes  =  {
    getCitas : PropTypes.func.isRequired
}

// primer parametro
const mapStateToProps = (state) => ({
    citas: state.citas.citas
});

// 1 .- Map de redux state a props
// 2.- acciones para dispatch
export default connect(mapStateToProps, {getCitas} )(ListaCitas);
