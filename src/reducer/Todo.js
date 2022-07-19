


const initialstate ={
    list:[], 
}

const Todolist = (state = initialstate,action) => {

  switch(action.type){
      case 'todos/todoAdded' : 
    
      return {
            list:action.payload
       }
   
      case "DELETE":
          const newlist = state.list.filter((ele) => {
          if(ele.id !== action.payload){
               return ele
           }
          })
         return{
             list : newlist
         }
      case "REMOVE":
          return{
            list:[]
          }
      default : return state;
  }

}


export default Todolist;