import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            joke: '',
            quote: ''
           };
}

componentDidMount(){   
          
        fetch("https://corporatebs-generator.sameerkumar.website/")
            .then(response => response.json())
            .then(data => console.log(data))

        fetch("https://geek-jokes.sameerkumar.website/api")
            .then(response => response.json())
            .then(data => console.log(data))               
}


render(){

    return(
    <div className="container-fluid">
        <h1>APIs are fun!</h1>
            <div className="row">
                <div className="col-sm-6">
                <p>corporate Quote</p>
              
                </div>
                 <div className="col-sm-6">
                 <p>Joke</p>
                 </div>
            </div>
    </div>
    
    )
}
};

export default App;