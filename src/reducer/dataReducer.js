const seekerReducer=(state=[],action)=>{
    switch(action.type){
        case 'init':{
            console.log('state value is',state);
            return action.payload
        }
        default:{ return state}
    }
 }
 export default seekerReducer