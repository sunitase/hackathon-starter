import React, { Component } from 'react';
//import photo from './photo'

class app extends Component {
    constructor(props){
        super(props);
        //state = {
          //  photo: ""
          //}; bind required

}

componentDidMount(){

        
            fetch(`https://api.nasa.gov/planetary/apod?api_key=1gPUiHV0m85zO9DCG6ssTie5bYmKi7cL9XvJgiEm`)
              .then(response => response.json())
              .then(data => console.log(data));
              //.then(json => this.setState({ photo: json }));
          
  
        fetch("https://corporatebs-generator.sameerkumar.website/")
        .then(response => response.json())
            .then(data => console.log(data))

            fetch("https://geek-jokes.sameerkumar.website/api")
            .then(response => response.json())
                .then(data => console.log(data)) 
        
            fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
                .then(data => console.log(data))

        
}


render(){
    return(
            <div className="container">
                <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
       <h4> 'Trying stuff out here'</h4>
      </div>
            </div>
    )
}
};

export default app;