import React from 'react';   
import { connect } from 'react-redux';

class Landing extends React.Component {
	state = {
		name:'himanshu'
	}
	componentDidMount() { 
	}  

	render() { 
		const { name } = this.state;
		return (
			<div> 
				Hi {name}
			</div>  
		);
	}
}

const mapStateToProps = (state) => { 
  const { authentication:{ loggedIn=!1 }={} } = state;
  return {
    loggedIn
  };
};  

export default connect(mapStateToProps)(Landing); 