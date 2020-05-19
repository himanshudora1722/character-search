import React, { Component } from 'react';
import Filter from '../../molecules/Filters';
import SearchBox from '../../molecules/SearchBox'
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import Select from '../../atoms/Select';
import CharacterListingPage from '../CharacterListingPage';

class SearchDetailView extends Component {
	constructor() {
		super();

		this.state = {
			sortValue: 'Ascending',
			searchValue: '',
			post: [],
			searchedArray: [],
			targetValue: [],
		}
	}

	getUniqueGenderValueofCharacter = characterArray => characterArray && [...new Set(characterArray.map(a => a.gender))];

	getUniqueSpeciesValueofCharacter = characterArray => characterArray && [...new Set(characterArray.map(a => a.species))];

	getUniqueOriginValueofCharacter = characterArray => characterArray && [...new Set(characterArray.map(a => a.origin.name))];

	handleChange = e => {
		this.setState({
			sortValue: e.target.value,
		})
	}

	compare = (postA, postB) => {
		const bandA = postA.id;
		const bandB = postB.id;
	
		let comparison = 0;
		if (bandA > bandB) {
			comparison = 1;
		} else if (bandA < bandB) {
			comparison = -1;
		}
		return comparison;
	}

	handleSearchChange = e => {
		this.setState({ searchValue: e.target.value });
	}

	handleClick = () => {
		const { searchValue, post, searchedArray } = this.state;
		const { characters } = this.props;

		let charactersToBeSearched = characters;
		if(post.length > 0 && searchValue) {
			charactersToBeSearched = post;
		} else if(!searchValue && searchedArray.length > 0) {
			charactersToBeSearched = searchedArray;
		}

		const searchedPost =[];

		charactersToBeSearched.find((post) => {
			if(post.name.toLowerCase().includes(searchValue.toLowerCase()))
				searchedPost.push(post);
		});

		this.setState({
			post: searchedPost
		})
	}

	getFilterValue = (key, filterObject) => {
		const { targetValue } = this.state;
		return filterObject && filterObject.map((value) => {
			const isChecked = targetValue.includes(value);
			return (
				<div className="truncate">
					<Input
						type="checkbox"
						id={`${key}-${value}`}
						handleChange={this.handleFilterChange}
						name={value}
						isChecked={isChecked}
					/>
					<Label 
						forLabel={value} 
						className="search-checkbox"
						text={value}
					/><br />
				</div>
			)
		})
	}

	handleFilterChange = e => {
		const { characters } = this.props;
		let { post, targetValue } = this.state;
		const key = e.target.id.split('-')[0];
		let uniqueArray;
		let toDeleteArray;
		let newArray;
		
		if (key.toLowerCase() === 'gender') {
			if (e.target.checked) {
				uniqueArray = new Set(post.concat(characters.filter(item => item.gender === e.target.name)))
				this.setState({
					post: [...uniqueArray],
					searchedArray: [...uniqueArray],
					targetValue: targetValue.concat(e.target.name),
				})
			} else {
				toDeleteArray = characters.filter(item => item.gender === e.target.name);
				newArray = this.getRemovedResult(toDeleteArray);
				const index = targetValue.indexOf(e.target.name);
				targetValue.splice(index, 1);

				this.setState({
					post: [...newArray],
					searchedArray: [...newArray],
					targetValue: targetValue
				})
			}
		} else if (key.toLowerCase() === 'species') {
			if (e.target.checked) {
				uniqueArray = new Set(post.concat(characters.filter(item => item.species === e.target.name)))
				this.setState({
					post: [...uniqueArray],
					searchedArray: [...uniqueArray],
					targetValue: targetValue.concat(e.target.name),
				})
			} else {
				toDeleteArray = characters.filter(item => item.species === e.target.name);
				newArray = this.getRemovedResult(toDeleteArray);
				const index = targetValue.indexOf(e.target.name);
				targetValue.splice(index, 1);

				this.setState({
					post: [...newArray],
					searchedArray: [...newArray],
					targetValue: targetValue
				})
			}
		} else {
			if(e.target.checked) {
				uniqueArray = new Set(post.concat(characters.filter(item => item.origin.name === e.target.name)))
				this.setState({
					post: [...uniqueArray],
					searchedArray: [...uniqueArray],
					targetValue: targetValue.concat(e.target.name),
				})
			} else {
				toDeleteArray = characters.filter(item => item.origin.name === e.target.name);
				newArray = this.getRemovedResult(toDeleteArray);
				const index = targetValue.indexOf(e.target.name);
				targetValue.splice(index, 1);

				this.setState({
					post: [...newArray],
					searchedArray: [...newArray],
					targetValue: targetValue
				})
			}
		}
	}

	getRemovedResult = toDeleteArray => {
		const { post } = this.state;
		const toDelete =  new Set(toDeleteArray.map(item => item.id));
		return post.filter(obj => !toDelete.has(obj.id));
	}

	render() {
		const { characters, className } = this.props;
		const { sortValue, post } = this.state;
		const sortValues = ['Ascending', 'Decending']

		let posts = post.length > 0 ? post : characters;

		const filterObject = {
			gender: this.getUniqueGenderValueofCharacter(posts),
			species: this.getUniqueSpeciesValueofCharacter(posts),
			origin: this.getUniqueOriginValueofCharacter(posts),
		}

		posts = posts && sortValue === 'Ascending' ? posts.sort(this.compare) : posts && posts.reverse();

		return posts && posts.length > 0 ? (
			<div className={`${className} o-searchDetail`}>
				<div className="row">
					<div className="col-sm-3 col-xs-12 fc-black">
						<h1>Filters</h1>
						{Object.keys(filterObject).map(key => {
							return (
								<Filter 
									filterObject={filterObject}
									keys={key}
									getFilterValue={this.getFilterValue}
								/>
							)
						})}
					</div>
					<div className="col-sm-9 col-xs-12">
						<div className="row search-sort-section">
							<h1 className="col-xs-12 pl-0">Search & Sort</h1>
							<div className="col-xs-6 mt30 pl-0">
								<SearchBox 
									handleSearchChange={this.handleSearchChange}
									handleClick={this.handleClick}
								/>
							</div>
							<div className="col-xs-6 mt30 relative">
								<Select 
									id="sort"
									name="sort"
									className="sort"
									onChange={this.handleChange}
									value={sortValues}
								/>
							</div>
						</div>
						<div className="row items">
							{posts.map(character => (
								<CharacterListingPage 
									character={character}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		) : null
	}
}

export default SearchDetailView