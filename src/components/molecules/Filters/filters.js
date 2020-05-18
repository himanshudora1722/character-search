import React from 'react';

const Filter = ({
	filterObject,
	keys,
	getFilterValue,
}) => {
	return (
		<div className="filter-border">
			<div className="filter-keys">
					{keys}
			</div>
				{getFilterValue(keys, filterObject[keys])}
		</div>
	)
}

export default Filter;