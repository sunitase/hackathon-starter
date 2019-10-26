import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
}

componentDidMount(){

        
        fetch(`https://api.nasa.gov/planetary/apod?api_key=1gPUiHV0m85zO9DCG6ssTie5bYmKi7cL9XvJgiEm`)
        .then(response => response.json())
        .then(data => console.log(data))
        //picture of the day

        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(data => console.log(data['number']))
              
          
  
        fetch("https://corporatebs-generator.sameerkumar.website/")
            .then(response => response.json())
            .then(data => console.log(data))

        fetch("https://geek-jokes.sameerkumar.website/api")
            .then(response => response.json())
            .then(data => console.log(data)) 
        
            
}


render(){
    var uri;
    return(
        <div className="container">

         <div class="row">

            <div class="col-5">
                <div class="d-flex">
                <div>
                  <h1>NASA's Astronomy Picture of the Day</h1>
                  <h4> 'Trying stuff out here'</h4>
                </div>
                </div>
             </div>
  
            <div class="col-5">
                <div class="d-flex align-items-start">
                 <div><h1>People currently in space</h1></div>
                 </div>
            </div>
             </div>
        </div>
    
    )
}
};

export default App;