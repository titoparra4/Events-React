import React, { Component } from 'react';

class Formulario extends Component {
	render() {
		return (
			<form>
				<fieldset className="uk-fieldset uk-margin">
					<legend className="uk-legend uk-text-center">Search your event by name or category</legend>

					<div className="uk-column-1-3@m uk-margin">
						<div className="uk-margin" uk-margin="true">
							<input className="uk-input" type="text" placeholder="Name of event or city" />
						</div>
						<div className="uk-margin" uk-margin="true">
							<select className="uk-select" />
						</div>
						<div className="uk-margin" uk-margin="true">
							<button className="uk-button uk-button-primary">Search</button>
						</div>
					</div>
				</fieldset>
			</form>
		);
	}
}

export default Formulario;
