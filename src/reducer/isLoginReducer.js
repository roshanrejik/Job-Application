const isLoginReducer=(state=localStorage.getItem('tokens')?true:false,action)=>{
   switch(action.type){
       case 'loggedIn':{
           return action.payload
       }
       case 'loggedOut':{
           return action.payload
       }
       default:{ return state}
   }
}
export default isLoginReducer