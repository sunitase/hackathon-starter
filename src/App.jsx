import React, { Component } from 'react';
import './css/custom.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: [],
            picture: ''

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
        
    

        /*fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(response => {
                const {people} = response
                console.log(response)
                this.setState({people: people})
            //.then(data => console.log(data.people[1]))       */   
          
    }


render(){
    let picture = this.state.picture;
    let hdurl;
    return(
    <div className="container-fluid">
        <h1>APIs are fun!</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div>
                    <p>'NASA's Astronomy Picture of the Day''</p>
                    <img src={this.state.picture} alt="" />
                    </div>
                </div>
                 <div className="col-sm-6">
                 <p>Number of people in space </p>
                     <p>{this.state.spacepeople}</p>
                 </div>
            </div>
    </div>
    
    )
}
};

export default App;