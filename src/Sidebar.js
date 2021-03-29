import React from "react";
import "./Sidebar.css"
export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state={
     year:'',
    yearid:'',
      launch:'',
      launchid:'',
      landing:'',
      landid:''
      
    
    }
  }
onClick=(e)=>{
let val = e.target.value || e.target.innerHTML;
let attr = e.target.getAttribute('name');
if (attr === 'year') {//this.state.year=val;
this.setState({year:val,yearid:e.target.getAttribute('id-attr')},()=>{
  this.props.onClick(this.state);
}) 
}
if (attr === 'launch') {//this.state.launch=val;
  this.setState({launch:val,launchid:e.target.getAttribute('id-attr')},()=>{
    this.props.onClick(this.state);
  }) 
}
if (attr === 'landing') {//this.state.landing=val;
this.setState({landing:val, landid:e.target.getAttribute('id-attr')},()=>{
  this.props.onClick(this.state);
}) 
}

}
  render() {
    const years = [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]
    const bools = ['True','False']
    return (
      <div  name="Sidebar" className='sidebar'>
        <span className='filters'>Filters</span>
  <input type='number' placeholder='Launch Year' disabled/>
  {years.map((year,id)=>{
    return<div id-attr = {id} name='year' className={this.state.yearid!=='' && parseInt(this.state.yearid) === id ? 'clicked year' 
    :'year'} onClick={this.onClick}>{year}</div>
  })}
  <input type='text' placeholder='Successful Launch' disabled/>
  {bools.map((bool,id)=>{
    return<div id-attr = {id} name='launch' className={this.state.launchid!=='' && parseInt(this.state.launchid) === id ? 'clicked bool' 
    :'bool'} onClick={this.onClick}>{bool}</div>
  })}
  <input type='text' placeholder='Successful Landing' disabled/>
  {bools.map((bool,id)=>{
    return<div id-attr = {id} name='landing' className={this.state.landid!=='' && parseInt(this.state.landid) === id ? 'clicked bool' 
    :'bool'} onClick={this.onClick}>{bool}</div>
  })}
      </div>
    );
  }
}
