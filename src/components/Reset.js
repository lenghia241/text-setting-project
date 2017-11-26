import React, { Component } from 'react';


class Reset extends Component {

	activateDefault = () => {
		this.props.setTextDefault(true);
	}

  render() {
    return (

     <button type="button" className="btn btn-warning" onClick={this.activateDefault}>Reset</button>


    );
  }
}

export default Reset;
