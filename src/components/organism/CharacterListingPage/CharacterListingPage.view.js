import React, { Component } from 'react';

class CharacterListingPage extends Component {
	getDateDiffInYears = date => {
		const createdDate = new Date(date);
		const currentDate = new Date();
		return Math.abs(new Date(currentDate-createdDate).getUTCFullYear() - 1970);
	}

	render() {
		const {character} = this.props;
		return(
			<div className="character-block col-sm-3 col-xs-6">
				<div>
					<img className="full-image" src={character.image} alt="" />
				</div>
				<div className="character-name">
					{character.name}
					<br/>
					<span className="label-size">
						{`id: `}
					</span>
					<span className="label-size">
						{`${character.id} - `}
					</span>
					<span className="label-size">
						created {this.getDateDiffInYears(character.created)} years ago
					</span>
				</div>
				<div className="character-detail">
					<div class="row wrap">
						<div className="col-xs-6 adjust-padding-left">
							<span className="details darkgray">Status</span>
						</div>
						<div className="col-xs-6 align-right adjust-padding-right">{character.status}</div>
					</div>
					<div class="row wrap">
						<div className="col-xs-6 adjust-padding-left">
							<span className="details darkgray">Species</span>
						</div>
						<div className="col-xs-6 align-right adjust-padding-right">{character.species}</div>
					</div>
					<div class="row wrap">
						<div className="col-xs-6 adjust-padding-left">
							<span className="details darkgray">Gender</span>
						</div>
						<div className="col-xs-6 align-right adjust-padding-right">{character.gender}</div>
					</div>
					<div class="row wrap">
						<div className="col-xs-6 adjust-padding-left">
							<span className="details darkgray">Origin</span>
						</div>
						<div className="col-xs-6 align-right adjust-padding-right">{character.origin.name}</div>
					</div>
					<div class="row wrap">
						<div className="col-xs-6 adjust-padding-left">
							<span className="details darkgray">Last Location</span>
						</div>
						<div className="col-xs-6 align-right adjust-padding-right">{character.location.name}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CharacterListingPage