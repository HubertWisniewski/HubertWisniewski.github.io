import React, {Component} from 'react';
import './App.css';

const beginAt = Date.now()
var lastElementTime = beginAt;
const elementDTime = 800 



class App extends Component {

  state = {
    elements: [],
    counter: 0,
    scoreAppeared: false
  }

  componentDidMount(){
    this.update()
  }


  updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
      scoreAppeared: true
    })
  }

  removeElement = (element) => {
    element.remove()

  }

  createElement = () => {

    
    const element = document.createElement('div', {className: 'hi1'})
    element.classList.add('hi1')
    element.innerHTML = 'Hi'
    element.onclick = () => {this.updateCounter(); this.removeElement(element)}
    element.speed = Math.ceil(Math.random() * 3)
    element.style.left = Math.floor(Math.random() * 100) - 10 + 'vw'; 
    this.state.elements.push(element);
    if (document.getElementById('App')) {
      document.getElementById("App").appendChild(element)
    }
    
 
  
  }
  
  update = () => {
    var now = Date.now()
  
    if (now - lastElementTime > elementDTime) {
      this.createElement()
    lastElementTime = now
  }
  
  this.state.elements.forEach(function (element) {
    var bottom = parseFloat(window.getComputedStyle(element).bottom);
    // var left = parseFloat(window.getComputedStyle(baloon).left);
  
    bottom += element.speed;
        if (bottom >= 570) {
          element.remove()
        }
        
  
        element.style.bottom = bottom + 'px';
  })
  
  requestAnimationFrame(this.update);
  }





  render(){
  return (
    <div id='App' className="wrapper">

  <div className="counter" style={this.state.scoreAppeared ? {zIndex: 1} : {zIndex: -1}}>Score: {this.state.counter}</div>
      <div className="menu">
      <div className="one">G00D</div>
      <div className="one">to see</div>
      <div className="one">you</div>
      <div className="one"></div>
      </div>     
    </div>
  );
 }
}

export default App;
