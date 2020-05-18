import React from 'react';
import Label from './../../atoms/Label';
import Input from './../../atoms/Input';
import Button from './../../atoms/Button';

const enterPressed = (e, handleClick) => {
	var code = e.keyCode || e.which;
    if(code === 13) { //13 is the enter keycode
			handleClick();
    } 
}

const SearchBox = ({
	handleSearchChange,
	handleClick,
}) => {
	return (
		<>
			<Label 
				forLabel="search" 
				className="search-label"
				text="Search By Name"
			/><br/>
			<Input 
				type="text"
				id="search"
				name="search"
				className="search-input"
				handleChange={handleSearchChange}
				onKeyPress={e => enterPressed(e, handleClick)}
			/>
			<Button 
				value="Submit"
				className="search-button"
				handleClick={ handleClick }
				text="Search"
			/>
		</>
	)
}

export default SearchBox;