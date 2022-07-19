


export const addTodo = (data) => {
     return{
        type: 'todos/todoAdded',
        payload:data
     }
  }
  

export const deletelist = (id) => {
    return{
        type:"DELETE",
        payload:id
    }
}

export const Removetodo = () => {
    return{
        type:"REMOVE",
        
    }
}

