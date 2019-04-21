import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {
	token = 'FVWKU4EOG57CWT4S73EL';
	ordenar = 'date';

	state = {
		categorias: [],
		eventos: []
	};

	componentDidMount() {
		this.obtenerCategorias();
	}

	obtenerCategorias = async () => {
		let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;

		obtenerEventos = async (busqueda) => {
			let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&formats=${busqueda.categoria}&sort_by=${this
				.ordenar}&token=${this.token}`;
		};

		await fetch(url)
			.then((respuesta) => {
				return respuesta.json();
			})
			.then((eventos) => {
				this.setState({
					eventos: eventos.events
				});
			});
	};

	render() {
		return (
			<div className="App">
				<Header />

				<div className="uk-container">
					<Formulario categorias={this.state.categorias} obtenerEventos={this.obtenerEventos} />
				</div>
			</div>
		);
	}
}

export default App;
