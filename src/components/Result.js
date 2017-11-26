import React, { Component } from 'react';

class Result extends Component {

    setTextColor =() => {
        return {
            color: this.props.colorProps,
            borderColor: this.props.colorProps,
            fontSize: this.props.fontSizeProps
        };
    }

  render() {
    return (

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                  <p>Color : {this.props.colorProps} - Fontsize : {this.props.fontSizeProps} px</p>

                  <div id="content" style={this.setTextColor()}>
                  This is a sample text ....
                  </div>
              </div>


    );
  }
}

export default Result;
