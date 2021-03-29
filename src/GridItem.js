import React from "react";
import "./grid.css"
export default class GridItem extends React.Component {
  
  render() {
      const{item,index}=this.props;
    return (
      <React.Fragment>
    <li key={index}>
        <div className='imgDiv'>
        <img src={item.links.mission_patch_small}></img>
        </div>
        <span className="name">{item.mission_name}</span>
        <div className="lYear">
            <span className='bold'>Launch Year:</span>
            <span>{item.launch_year}</span>
        </div>
        <div className="lYear">
            <span className='bold'>Successful Launch:</span>
            <span>{item.launch_success.toString()}</span>
        </div>
        <div className="lYear">
            <span className='bold'>Successful Landing:</span>
            <span>{item.launch_landing}</span>
        </div>
        <div className="lYear">
            <span className='bold'>Mission Id:</span>
            <ul>
            {
                item.mission_id.map((id)=>{
                    return <li className='mission_id_li'>{id}</li>
                })
            }
            </ul>
        </div>
    </li>
   
    </React.Fragment>
    );
  }
}
