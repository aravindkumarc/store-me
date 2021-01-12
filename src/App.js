import classes from './App.module.css';
import React, {Component} from 'react';
import Home from './Home/Home.jsx'

class App extends Component {

  state={
    homeTitle:"Home ",
    home:[{id:1,name:"home 1"},{id:2,name:"home 2"}]
  }

  addHome=()=>{
    const newHome={id:this.state.home.length+1,name:this.state.homeTitle};
    const home=JSON.parse(JSON.stringify(this.state.home));
    home.push(newHome);
    this.setState({home:home})
  }

  addTitle=(evt)=>{
    this.setState({
      homeTitle:evt.target.value
    })

  }

  render(){
    return (
      <div className={classes.App}>
        <h1>Store Me</h1>
        <div>
        <input   value={this.state.homeTitle} onChange={ e=>this.addTitle(e)} type="text" className={`form-control w-25 ${classes.Input}`}/>
        </div>
        <button className="btn btn-primary" onClick={this.addHome}>Add Home</button>
        {this.state.home.map(h=>{
          return <Home key={h.id} name={h.name} ></Home>
        })}
      </div>


      )
  }
     
}

export default App;
