import { useEffect, useState } from 'react'
import './App.css'

function App() {


  const [newToDo, setNewToDo] = useState("")
  const [toDoList, setToDoList]= useState([])
  const [completedList, setCompleted ]= useState([])

  const addToDoListHandler = ()=>{
    if(newToDo.trim() !==""){
      setToDoList([...toDoList, {title:newToDo, iscompleted:false}])
    setNewToDo("")
    }

    
  }

  const removeToDoItem=(index)=>{
    setToDoList(toDoList.filter((_,idx)=>idx !== index))
  }

  const toggleCompleteItem=(index)=>{
    const updateToDoList= toDoList.map(
      (toggleItem, idx)=>idx ===index ? 
      {...toggleItem, iscompleted:!toggleItem.iscompleted}
      :
      toggleItem
    )

      setToDoList(updateToDoList)
      const updateCompletedList = updateToDoList.filter( (todo) => todo.iscompleted== true)
      setCompleted(updateCompletedList)
    }

    const removeCompletedTask=(index)=>{
      setCompleted(completedList.filter((_, idx)=>idx !== index ))
      

    }



  return (

    <div>
      <input
      placeholder='Please set your todo list'
      onChange={(e)=>setNewToDo(e.target.value)}
      className='toDoInput'
      value={newToDo}
      >
      </input>

      <button

      onClick={addToDoListHandler}
      >
      Add todo list
     </button>  
     <div className='container'> 

      <div className='todoList'>
      <h1>ToDo list:</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
            
          </tr>
        </thead>

        <tbody>
          {toDoList.map((todoitem, index)=>(
            <tr key={index}>
              <td>
                <span
                style={{textDecoration:todoitem.iscompleted ? "line-through" : "",
                  cursor:'pointer'
                }}
                
                > 
                {todoitem.title}
                </span>
              </td>
              <td>
                <input 
                type="checkbox" 
                checked={todoitem.iscompleted}
                onChange={()=>toggleCompleteItem(index)}
                />
              </td>

              <td>
                <button
                className="removeButton" 
                onClick={()=>removeToDoItem(index)}
                >
                  remove
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      </div>

      <div className='completedList'>
        <h1>Completed</h1>
      <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {completedList.map((completedList, idx)=>(
          <tr>
          <td>{completedList.title}</td>
          <td><input 
          type="checkbox" 
          onClick={()=>toggleCompleteItem(idx)}/></td>
          <td><button className="removeButton" onClick={()=>removeCompletedTask(idx)}>remove</button></td>
        </tr>  
          ))}
          
          </tbody>

      </table>
      </div>
      
      </div>
    </div>
  )
}

export default App
