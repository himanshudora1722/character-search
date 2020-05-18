import React from 'react';

const Select = ({
  id,
	name,
	className,
	onChange,
	value,
}) => {
	return (
		<select id={id} name={name} className={className} onChange={onChange}>
			{value.map(item => {
					return <option value={item}>{item}</option>
				}
			)}
		</select>
	)
}

export default Select