import React, { Component } from 'react';


class TextSize extends Component {

  chanceFontSize(value) {
    this.props.passFontSize(value);
  }

  render() {
    return (

                  <div className="panel panel-success">
                      <div className="panel-heading">
                          <h3 className="panel-title">Size: {this.props.fontSizeProps}</h3>
                      </div>
                      <div className="panel-body">
                          <button type="button" className="btn btn-success" onClick={()=> this.chanceFontSize(-2)}> Decrease</button>&nbsp;
                          <button type="button" className="btn btn-success" onClick={()=> this.chanceFontSize(2)}> Increase</button>
                      </div>
                  </div>

    );
  }
}

export default TextSize;
