import React, {Component} from 'react';
import PostData from './post.json';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Postlist extends Component{

constructor(props){
    super(props);
    this.state={
        data: PostData,
      }
      this.delete = this.delete.bind(this);
    //  this.open= this.open.bind(this);
}

delete(event){   //event isliye jisse jahan hum click krte hai wo element access ho jata hai...
  var id = event.target.id;
  var data1 = this.state.data;
    data1.splice(id,1);
    this.setState({
        data : data1
      })
}

/*open(event){
  //var id = event.target.id;
  var data1 = this.state.data;
      data1.splice(1,2);
      this.setState({
        showdetails : true,
        data : data1
    })
}*/

render() {
    return (
      <div>
        <h1>todo json App </h1>
        {PostData.map((Postdetails,index)=>{
            return <div key={index}>
                        <h2 onClick={this.open} id={index}>{Postdetails.title} <span onClick={this.delete} id={index}>X</span></h2>
                        <p>{Postdetails.content}</p>
                  </div>
          })}

      </div>
    )
  }
}

export default Postlist;
