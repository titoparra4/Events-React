import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {
	token = 'FVWKU4EOG57CWT4S73EL';

	state = {
		categorias: []
	};

	componentDidMount() {
		this.obtenerCategorias();
	}

	obtenerCategorias = async () => {
		let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;

		await fetch(url)
			.then((respuesta) => {
				return respuesta.json();
			})
			.then((categorias) => {
				this.setState({
					categorias: categorias.categories
				});
			});
	};

	obtenerEventos = async (busqueda) => {};

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
