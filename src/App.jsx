import React, { Component } from 'react';
import './css/custom.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: [],
            picture: '',
            name: '',
            numberdisplay: '',
            number: ''
           };
}

componentDidMount(){   
        fetch(`https://api.nasa.gov/planetary/apod?api_key=1gPUiHV0m85zO9DCG6ssTie5bYmKi7cL9XvJgiEm`)
        .then(response => response.json())
        .then(response => {
            const {hdurl} = response
            console.log(response)
            this.setState({picture: hdurl})
        })
        
    

        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(response => {
                const {number} = response
               // const {name} = response
                console.log(response['number'])
               // console.log(response['name'])
                console.log(response)
                this.setState({numberdisplay: number}) 
               // this.setState({name: name})
            })
            
        }
          
    


render(){
    return(
    <div className="container-fluid">
        <h6>APIs are fun!</h6>
            <div className="row">
                <div className="col-sm-6">
                    <div>
                    <h6>NASA's Astronomy Picture of the Day</h6>
                    <img src={this.state.picture} alt="" />
                    </div>
                </div>
                 <div className="col-sm-6">
                 <h6>We are in space!</h6>
                 <br></br><br></br>
                     <h4 id="rcorners2">Number of people in space: {this.state.numberdisplay}</h4>
                 </div>
            </div>
    </div>
    
    )
}
};

export default App;