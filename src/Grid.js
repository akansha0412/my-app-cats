import React from "react";
import "./grid.css"
import GridItem from "./GridItem";
export default class Grid extends React.Component {
  
  render() {
      const{data}=this.props;
    return (
      <div  name="Grid" className='grid'>
       <ul class="auto-grid">
    
    {data && data.length?data.map((item,index)=>{
       return <GridItem item={item} index={index}/> 
    }):'No data for applied filters'}
  </ul>
      </div>
    );
  }
}
