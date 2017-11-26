import React, { Component } from 'react';



class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {colorToChoose:['red','green','blue','orange']}

    }

    setColor(color) {
            return {
                backgroundColor : color
            };
        }

    sendColor(color) {
        this.props.changeColor(color);
    }

  render() {

    

     const elementColor = this.state.colorToChoose.map((color,index)=> {
            return <span 
                        key={index} 
                        style= {this.setColor(color)} 
                        className= {this.props.colorProps === color ? 'active' : ''} 
                        onClick = { ()=> this.sendColor(color)}

                    ></span>
        }); 
   
    return (

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="panel panel-primary">
                      <div className="panel-heading">
                          <h3 className="panel-title">Color Picker</h3>
                      </div>
                      <div className="panel-body">
                          {elementColor}
                          <hr/>
                      </div>
                  </div>
              </div>

    );
  }

}

export default ColorPicker;
