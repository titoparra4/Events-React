import React, { Component } from 'react';
import Header from './componentes/Header';

class App extends Component {
	componentDidMount() {
		this.obtenerCategorias();
	}

	obtenerCategorias = async () => {
		let url = `https://www.eventbriteapi.com/v3/categories/?token=FVWKU4EOG57CWT4S73EL`;

		await fetch(url)
			.then((respuesta) => {
				return respuesta.json();
			})
			.then((categorias) => {
				console.log(categorias);
			});
	};

	render() {
		return (
			<div className="App">
				<Header />
			</div>
		);
	}
}

export default App;
