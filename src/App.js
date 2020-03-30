import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {list : [
    {name:'Alex',age:21,town:'Berlin'},
    {name:'Gustov',age:25,town:'Moscow'},
    {name:'Samerset',age:29,town:'Toronto'}
  ]
};
switchHandler(){
  let newPerson = {name:'Tommy Shelby',age:25,town:'Geneva'}
  this.setState({list:[newPerson]})
}
  render()
  {
   
    return (
    <div className="App">
      <h1>Hi, This is a react App</h1>
      <button onClick={()=>this.switchHandler()}>Increase Person</button>
      {
        this.state.list.map((user,index)=> <Person name={user.name} key={index} age={user.age} town={user.town}>amazing</Person>)
      }
      
    </div>
    // React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, This is a react App'))
  );
}
}

export default App;
