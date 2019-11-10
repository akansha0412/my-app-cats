import React, { Component } from 'react';
import cat1 from './cat_1.png';
import cat2 from './cat_2.png';
import cat3 from './cat_3.png';
import cat4 from './cat_4.png';
import cat5 from './cat_5.png';
import cat6 from './cat_6.png';
import cat7 from './cat_7.png';
import cat8 from './cat_8.png';
import cat9 from './cat_9.png';
import cat10 from './cat_10.png';
import cat11 from './cat_11.png';
import cat12 from './cat_12.png';

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val:0
    };
    this.fillData = this.fillData.bind(this);
  }
  // componentDidMount() {
  //   this.intervalID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }
  // componentWillUnmount() {
  //   clearInterval(this.intervalID);
  // }
  checkRules(){
    let flag = false;
    let m1= document.getElementById('grid1').getElementsByTagName('img')[0].src;
    let m2= document.getElementById('grid2').getElementsByTagName('img')[0].src;
    let m3= document.getElementById('grid3').getElementsByTagName('img')[0].src;
    let m4= document.getElementById('grid4').getElementsByTagName('img')[0].src;
    let m5= document.getElementById('grid5').getElementsByTagName('img')[0].src;
    let m6= document.getElementById('grid6').getElementsByTagName('img')[0].src;
    let m7= document.getElementById('grid7').getElementsByTagName('img')[0].src;
    let m8= document.getElementById('grid8').getElementsByTagName('img')[0].src;
    let m9= document.getElementById('grid9').getElementsByTagName('img')[0].src;
    let m10= document.getElementById('grid10').getElementsByTagName('img')[0].src;
    let m11= document.getElementById('grid11').getElementsByTagName('img')[0].src;
    let m12= document.getElementById('grid12').getElementsByTagName('img')[0].src;
  if((m1==m2) || (m2==m3) ||(m1==m3)) flag = true;
  if((m4==m5)||(m4==m6)||(m5==m6)) flag = true;
  if((m7==m8)||(m7==m9)||(m8==m9)) flag = true;
  if((m10==m11)||(m11==m12)||(m10==m12)) flag = true;

  if(flag == true) alert('you have lose the match');
    else alert('you have won the match');
  }
  fillData(e) {
    let elem = document.createElement("img");
    elem.setAttribute('height','70px'); elem.setAttribute('width','70px');
          elem.src = document.getElementById(e).getAttribute('src');
    
  
  let current = this.state.val+1;
   if(document.getElementById('grid'+current) && current <=12) document.getElementById('grid'+current).appendChild(elem);
   if(current >=12) {this.checkRules()};
    this.state.val++;
   
  }
  render() {
    var grids = [1,2,3,4,5,6,7,8,9,10,11,12];
    var cells = grids.map((items,index) =>{
    return( <div id ={'grid'+items} key={'grid'+items} className="grid-item"></div>)
  })
    return (
      <div>
      

      <div className="row"> 
  <div className="column">
<img id="cat1" src={cat1} alt = '' onClick={()=> this.fillData('cat1')} />
<img id="cat2" src={cat2} alt = '' onClick={()=>this.fillData('cat2')}/>
<img id="cat3" src={cat3} alt = '' onClick={()=>this.fillData('cat3')} />
<img id="cat4" src={cat4} alt = '' onClick={()=>this.fillData('cat4')} />
  </div>
  <div className="column">
   <img id="cat5" src={cat5} alt = '' onClick={()=>this.fillData('cat5')}/>
   <img id="cat6" src={cat6} alt = '' onClick={()=>this.fillData('cat6')} />
   <img id="cat7" src={cat7} alt = '' onClick={()=>this.fillData('cat7')}/>
   <img id="cat8" src={cat8} alt = '' onClick={()=>this.fillData('cat8')}/>
  </div>  
  <div className="column">
    <img id="cat9" src={cat9} alt = '' onClick={()=>this.fillData('cat9')}/>
    <img id="cat10" src={cat10} alt = '' onClick={()=>this.fillData('cat10')} />
    <img id="cat11" src={cat11} alt = '' onClick={()=>this.fillData('cat11')}/>
    <img id="cat12" src={cat12} alt = '' onClick={()=>this.fillData('cat12')}/>
    
  </div>
  
</div>
<div className="grid-container">
   
{cells}

</div>

      </div>
    );
  }
}
export default App;
