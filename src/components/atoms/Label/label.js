import React from 'react';

const Label = ({
  className,
	forLabel,
	text,
}) => {
	return (
		<label 
			for={forLabel}
			className={className}
		>
			{text}
		</label>
	)
}

export default Label