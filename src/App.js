import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker'
import Reset from './components/Reset'
import Result from './components/Result'
import TextSize from './components/TextSize'


class App extends Component {

    constructor(props){
        super(props);
        this.state={
            color: 'red',
            fontSize : 16
        };
        this.changeColor = this.changeColor.bind(this);
        this.passFontSize = this.passFontSize.bind(this);
        this.setTextDefault = this.setTextDefault.bind(this);
    }

    changeColor(params) {
        
        this.setState ({
            color: params
        });      
    }

    passFontSize(value) {
        if (this.state.fontSize + value >=8 && this.state.fontSize + value <= 36) {
            this.setState ({
                fontSize: this.state.fontSize+value
            });
        }
    }

    setTextDefault(value) {
        if (value){
            this.setState ({
                color : 'red',
                fontSize: 16
            });
        }
    }

  render() {
    return (

      <div className="container-fluid pt-50">

          <div className="row">

              <ColorPicker colorProps={this.state.color} changeColor={this.changeColor}/>

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                 <TextSize fontSizeProps = {this.state.fontSize} passFontSize={this.passFontSize}/>

                <Reset setTextDefault={this.setTextDefault}/>

            </div>

              <Result colorProps = {this.state.color} fontSizeProps = {this.state.fontSize}/>

          </div>

         

      </div>


    );
  }
}

export default App;
