import React, {Component} from 'react';
import './App.css';
import me from './img/Meblocks.png'
import github from './img/github.png'
import linkedin from './img/linkedin.png'

const beginAt = Date.now()
var lastElementTime = beginAt;
const elementDTime = 800 



class App extends Component {

  state = {
    elements: [],
    counter: 0,
    scoreAppeared: false,
    websiteMode: false,
    sectionsOn: false
  }

  componentDidMount(){
    this.update()
  }

  showAbout = () => {
    this.setState({
      sectionsOn:true
    })
    document.getElementById('ContactSection').style.opacity = 0
    document.getElementById('ContactSection').style.zIndex = -2
    document.getElementById('AboutSection').style.opacity = 1
    document.getElementById('App').style.backgroundColor = 'black'
    document.getElementById('Desc').style.animation = 'navbarslide 5s ease 0s 1 normal forwards'
    document.getElementById('DescTwo').style.animation = 'none'
    document.getElementById('Image').style.animation = 'filters 5s ease 0s 1 normal forwards'
  }

  showContact = () => {
    this.setState({
      sectionsOn:true
    })
    document.getElementById('ContactSection').style.zIndex = 2
    document.getElementById('ContactSection').style.opacity = 1
    document.getElementById('AboutSection').style.opacity = 0
    document.getElementById('Desc').style.animation = 'none'
    document.getElementById('DescTwo').style.animation = 'navbarslide 5s ease 0s 1 normal forwards'
    document.getElementById('App').style.backgroundColor = 'black'
    // document.getElementById('Desc').style.animation = 'navbarslide 6s ease 0s 1 normal forwards'
    document.getElementById('Image').style.animation = 'filters 5s ease 0s 1 normal forwards'
  }

  websiteMode = (event) => {
    this.setState({
      websiteMode: true
    })

      this.state.elements.forEach((element) => {
        element.remove()
      })

     event.target.style.animation = 'navbarslide 5s ease 0s 1 normal forwards'
     event.target.innerHTML = ''

     const navbutton = document.createElement('div', {className: 'klocek'})
     navbutton.classList.add('klocek')
     navbutton.onclick = () => {this.showAbout()}
     navbutton.innerHTML = 'About'
     document.getElementById('Start').appendChild(navbutton)

     const navbutton2 = document.createElement('div', {className: 'klocek'})
     navbutton2.classList.add('klocek')
     navbutton2.onclick = () => {this.showContact()}
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
  <img id='Image' src={me} alt='me' style={this.state.sectionsOn ? {zIndex: 2} : {zIndex: -1} && this.state.sectionsOn ? {opacity: 1} : {opacity: 0} }/>
  <div id="AboutSection" className="About" style={this.state.sectionsOn ? {zIndex: 1} : {zIndex: -1} && this.state.sectionsOn ? {opacity: 1} : {opacity: 0} }>My name is <br/> <br/>Hubert Wiśniewski <hr className='line'/>
  <h1 id='Desc' style={{fontSize: '20px', color: '#dac2a1'}}>I am an aspiring FrontEnd Developer <br/><br/>based in Poland<br/><br/><br/><br/>I like unorthodox designs <br/><br/> <br/><br/>I hate boring websites<br/><br/><br/><br/>I am also a guitarist/singer in my band <br/><br/><p style={{color: '#f86502'}}>'The Cassino'</p>  </h1>
  </div>
  <div id='ContactSection' className='Contact'  style={this.state.sectionsOn ? {zIndex: 1001} : {zIndex: -1} && this.state.sectionsOn ? {opacity: 1} : {opacity: 0} }>You can find me<br/><br/> HERE <hr className='line'/>
  <h1 id='DescTwo' style={{fontSize: '20px', color: '#dac2a1'}}><br/><br/>Email me at: <br/><br/><p style={{color: '#f86502'}} >hubertwisniewski.frontend@gmail.com</p><br/>You can also check: <br/><br/><a href='https://github.com/HubertWisniewski' target="_blank" rel='noopener noreferrer'><img className="social"  src={github} alt='github'/></a><a href='https://linkedin.com/in/hubertwiśniewski' style={{textDecoration: 'none'}} target="_blank" rel='noopener noreferrer'> <img className='social' src={linkedin} style={{marginLeft: '1em'}} alt=''/></a> </h1>
  </div>
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
