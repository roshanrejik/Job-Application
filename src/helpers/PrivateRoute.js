import {Route,Redirect} from 'react-router-dom'
const PrivateRoute=({component:Component,...rest})=>{
    return <Route {...rest}
        render={(props)=>{
            return localStorage.getItem('tokens')?<Component {...props}/> : <Redirect to={{pathname : '/login'}}/>
        }}
        />
}
export default PrivateRoute
/*
    PrivateRoute path='/Account' exact={true} component={Account}/>
    <PrivateRoute path='/MyNotes' exact={true} component={MyNotes}/>
    import PrivateRoute from "../helpers/PrivateRoute";
*/ 