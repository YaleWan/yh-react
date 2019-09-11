import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:7001';
//所有api接口的封装
export const findAllMenu = ()=>{
    return axios.get('/findAllMenu')
}
export const findButtons = (id)=>{
    return axios.post('/findButtons',{id})
}
export const addUser = (userInfo) => {
    return axios.post('/addUser',userInfo)
}