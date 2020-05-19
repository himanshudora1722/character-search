import React from 'react';

const Input = ({
  className,
	type,
	text,
	id,
	handleChange,
	onKeyPress,
	name,
	isChecked
}) => {
	return (
		<input 
			id={id}
			type={type}
			className={className}
			onChange={handleChange}
			name={name}
			onKeyPress={onKeyPress}
			checked={isChecked}
		>
			{text}
		</input>
	)
}

export default Input