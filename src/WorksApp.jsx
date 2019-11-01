//will be using this to learn and practice...
//my own code is in app which was a nice project 
// will make further improvements to  that later
import React, { Component } from 'react';
const axios = require('axios');

export default class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      randomKanye: '',
      randomDog: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.getKanye = this.getKanye.bind(this);
    this.getDog = this.getDog.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit() {
    this.getKanye();
    this.getDog();
  }

  getKanye() {
    const reqURL = 'https://api.kanye.rest/';
    axios.get(reqURL).then(res => {
      this.setState({
        randomKanye: res.data.quote
      });
    });
  }

  getDog() {
    const reqURL2 = 'https://dog.ceo/api/breeds/image/random';
    axios.get(reqURL2).then(res => {
      this.setState({
        randomDog: res.data.message
      });
    });
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Hackathon Random App</h1>
        <p className='App-intro'>Get a Random Kanye West Quote and Dog Picture at the Click of a Button!</p>
        <button
        id='getInfo'
        className='btn btn primary'
        onClick={this.submit}
        >
          Click Here
        </button>
      </header>
      <div className='container'>
        <div className='body'>
          <div
            name='quote'
            id='quote'
            className='container-fluid'
            onChange={this.handleChange}
            >
              Kanye Says:
              {this.state.randomKanye}
            </div>
            <div
            message='success'
            className='container-fluid'
            onChange={this.handleChange}
            >
              Dog Pic:
              <img src={this.state.randomDog}/>
            </div>
        </div>
      </div>
      </div>
    );
  }
}
      
        render() {
      
          // Define Data
          var { isLoaded, items } = this.state;
      
          // return data atau state 
          if (!isLoaded) {
            return <div>Loading ....</div>
          }
          else {
            return (
              <div className="App">
                <ul>
                  {items.map(item => (
                    <li key={item.id}>
                      Name : {item.name}
                      Email: {item.email}
                    </li>
                  )
                  )}
                </ul>
              </div>
            );
          }
        }
      }
      

export default App;
