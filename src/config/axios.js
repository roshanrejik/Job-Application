import  Axios  from "axios";
const axios=Axios.create({
    baseURL:'http://dct-user-auth.herokuapp.com'
})
export default axios