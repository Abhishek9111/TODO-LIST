import React from 'react'
import './App.css'
import todo from './todo.jpg'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      newItem:"",
      list:[]
    }
  }

  addItem(item){
    if(item!==""){
      const newItem={
        id:Date.now(),
        value:item,
        isDone:false
      }
      const list = [...this.state.list];
      list.push(newItem)
      this.setState({
        newItem:"",
        list
      })
    } 
                                            
  }

   handleKey =(e) =>{

      if(e.key==='Enter'){
        console.log(e.target.value,this)
        this.addItem(e.target.value)
      
    }
  }

  updateInfo(val){
    this.setState({newItem:val})
  }
  deleteItem(id){
    const list = [...this.state.list]
    const updatedList=list.filter(item=> item.id != id)
    this.setState({list:updatedList})

  }
  // searchItem(id){
  //   const list=[...this.state.list]
  //   const newList = list.filter(item=> item.id==id)
  //   this.setState({list:newList})
  // }

  render(){
    return(
      <div>
        <img src={todo} width={200} height={200} className='logo'/>
        <h1 className='app-title'>React Todo List</h1>
        <div className="container">
          Add an item..
          <br/>
          <input 
          type='text'
          className="input-text"
          placeholder='Enter the task'
          value={this.state.newItem}
          onChange={e=>this.updateInfo(e.target.value)}
          onKeyDown={this.handleKey}
          />
          <button className='add-btn' onClick={()=>this.addItem(this.state.newItem)} >Add item</button>
          {/* <button className='search-btn' onClick={()=>this.searchItem(this.state.newItem.id)}>Search</button> */}
          <div className='list'>
            
            <ul>
              {this.state.list.map(item=>{
                return(
                  <li><input type='checkbox' name='' id=''/>{item.value}<button className='btn' onClick={()=>this.deleteItem(item.id)}>Delete</button></li>
                )
              })}

              
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App