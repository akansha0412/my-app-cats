import React, { Component } from 'react';


import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs:['Tab1','Tab2','Tab3'],
      cnt:3
    };
  }
  
componentDidMount(){
  document.getElementById('Tab1').style.display = "block";
  document.querySelector('[tabkey="0"]').className += " active";
}

    openCity = (evt, cityName)=> {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
  addTab = ()=>{
    this.state.cnt++;
    const tabName = 'Tab'+this.state.cnt;
      this.state.tabs.push(tabName)
    this.setState({tabs:this.state.tabs})
  }
  removeTab = (e)=>{
    
const index = this.state.tabs.indexOf(e.target.getAttribute('tabname'));
if (index > -1) {
  this.state.tabs.splice(index, 1);
  this.setState({tabs:this.state.tabs})
}
}
onMousedown= (e)=>{
  this.mouseDownTab = e.target.getAttribute('tabkey')
}

// onMousemove= (e)=>{
//   console.log(e.target)
// }

swapItems = (arr,a, b) =>{
      var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}
onMouseup= (e)=>{
  let tabs = this.state.tabs;
   this.swapItems(tabs,this.mouseDownTab,e.target.getAttribute('tabkey'))
    this.setState({tabs:tabs})
}
  
  render() {
    const tabs = this.state.tabs;
    return(
      <React.Fragment>
      <div className="tabDiv">
      {tabs.map((tab, i) => (
       
<div className="tab"  onMouseDown={this.onMousedown} onMouseUp={this.onMouseup}>
  <button tabkey={i} className="tablinks" onClick={(e)=>this.openCity(e, tab)}>{tab}</button>
  <span tabname={tab} className='cancel' onClick={(e)=>{this.removeTab(e)}}>x</span>
</div>
))}
      </div>
      <div className='addicn' onClick={this.addTab}> + </div>
      <div>
      {tabs.map((tab, i) => (
        <div id={tab} className="tabcontent">
  <h3>{tab}</h3>
  <p>{tab} + 'contents'</p>
</div> ))}
</div>

</React.Fragment>

      )
  }
}
export default App;
