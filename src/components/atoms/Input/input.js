import React from 'react';

const Input = ({
  className,
	type,
	text,
	id,
	handleChange,
	onKeyPress,
	name,
}) => {
	return (
		<input 
			id={id}
			type={type}
			className={className}
			onChange={handleChange}
			name={name}
			onKeyPress={onKeyPress}
		>
			{text}
		</input>
	)
}

export default Input