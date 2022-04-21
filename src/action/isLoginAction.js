export const loggedIn=()=>{
    return{
        type:'loggedIn',
        payload:true
    }
} 
export const loggedOut=()=>{
    return{
        type:'loggedOut',
        payload:false
    }
} 