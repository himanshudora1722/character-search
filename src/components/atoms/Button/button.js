import React from 'react';

const Button = ({
  className,
	value,
	handleClick,
	text,
}) => {
	return (
		<button 
			type="button"
			value={value}
			className={className} 
			onClick={handleClick}>
				{text}
		</button>
	)
}

export default Button