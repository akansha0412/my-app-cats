import "./SpaceX.css";
import React from "react";
import Grid from "./Grid";
import Sidebar from "./Sidebar";
export default class SpaceX extends React.Component {
 constructor(props){
   super(props)
   this.state={
    data:[]
   }
 }
  componentDidMount(){

    this.getSpacexData();
  }
  getSpacexData=(data_new)=>{
    
    fetch("https://api.spaceXdata.com/v3/launches?" +
        new URLSearchParams({
          limit:100,
          launch_success:data_new?data_new.launch:'',
          land_success:data_new?data_new.landing:'',
          launch_year:data_new?data_new.year:''
        })
    )
    
    .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      });
    
  }
  render() {
    return (
      <div className="spaceX" name="SpaceX">
      <span className='title'>SpaceX Launch Programs</span>
      <Sidebar onClick={this.getSpacexData}/>
      <Grid data={this.state.data}/>
      </div>
    );
  }
}
