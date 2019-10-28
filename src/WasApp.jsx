import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            spacepeople: '',
            picture: ''

           };
}

componentDidMount(){   
        fetch(`https://api.nasa.gov/planetary/apod?api_key=1gPUiHV0m85zO9DCG6ssTie5bYmKi7cL9XvJgiEm`)
        .then(response => response.json())
        .then(data => console.log(data.hdurl))
        .then(json => this.setState({ picture: json }));
      
    
        
       

        /*fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(data => console.log(data.people[1]))
             
          
        fetch("https://corporatebs-generator.sameerkumar.website/")
            .then(response => response.json())
            .then(data => console.log(data))

        fetch("https://geek-jokes.sameerkumar.website/api")
            .then(response => response.json())
            .then(data => console.log(data))   */             
}


render(){
    let picture = this.state.picture;
    let hdurl;
    return(
    <div className="container-fluid">
        <h1>Hello World!</h1>
            <div className="row">
                <div className="col-sm-6">
                <p>'NASA's Astronomy Picture of the Day''</p>
                <img className='image' src={picture} ></img>
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