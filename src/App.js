import React, {Component} from 'react';
import './App.css';

const beginAt = Date.now()
var lastElementTime = beginAt;
const elementDTime = 800 



class App extends Component {

  state = {
    elements: [],
    counter: 0,
    scoreAppeared: false,
    websiteMode: false
  }

  componentDidMount(){
    this.update()
  }

  websiteMode = (event) => {
    this.setState({
      websiteMode: true
    })

     event.target.style.animation = 'navbarslide 5s ease 0s 1 normal forwards'
     event.target.innerHTML = ''

     const navbutton = document.createElement('div', {className: 'klocek'})
     navbutton.classList.add('klocek')
     navbutton.classList.remove('toWebsite')
     navbutton.innerHTML = 'About'
     document.getElementById('Start').appendChild(navbutton)

     const navbutton2 = document.createElement('div', {className: 'klocek'})
     navbutton2.classList.add('klocek')
     navbutton2.innerHTML = 'Contact'
     document.getElementById('Start').appendChild(navbutton2)

     const navbutton3 = document.createElement('div', {className: 'klocek'})
     navbutton3.classList.add('klocek')
     navbutton3.innerHTML = 'Skills'
     document.getElementById('Start').appendChild(navbutton3)
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

  if(this.state.websiteMode) {
    return
  }
  
  requestAnimationFrame(this.update);
  }





  render(){
  return (
    <div id='App' className="wrapper">
  <div className='toWebsite' id='Start' onClick={(event) => this.websiteMode(event)} style={this.state.counter >= 10 ? {zIndex: 1} : {zIndex: -1}}>Start</div>
  <div className="counter" style={this.state.websiteMode ? {opacity: 0} : {opacity: 1} && this.state.scoreAppeared ? {zIndex: 1} : {zIndex: -1}}>Score: {this.state.counter}</div>
      <div className="menu">
      <div className="one" style={this.state.websiteMode ? {opacity: 0} : {opacity: 1}}>G00D</div>
      <div className="one" style={this.state.websiteMode ? {opacity: 0} : {opacity: 1}}>to see</div>
      <div className="one" style={this.state.websiteMode ? {opacity: 0} : {opacity: 1}}>you</div>
      <div className="one"></div>
      </div>     
    </div>
  );
 }
}

export default App;
