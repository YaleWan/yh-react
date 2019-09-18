import axios from "axios";
axios.defaults.baseURL = "http://localhost:7001";
//所有api接口的封装

// 查询所有菜单的接口
export const findAllMenu = () => {
  return axios.get("/findAllMenu");
};

// 查询所有按钮的接口
export const findButtons = id => {
  return axios.post("/findButtons", { id });
};

// 查询所有用户信息的接口
export const findUser = attrs => {
  console.log("attrs :", attrs);
  return axios.post("/findUser", attrs);
};

// 修改新增用户信息的接口
export const addUser = (userInfo, type, id) => {
  return axios.post("/addUser", [userInfo, type, id]);
};

// 删除用户信息的接口
export const delUser = ids => {
  return axios.post("/delUser", { ids });
};

// 修改新增菜单接口
export const handleMenu = (menuInfo, type, id) => {
  return axios.post("/handleMenu", [menuInfo, type, id]);
};

// 删除菜单接口
export const delMenu = id => {
  return axios.post("/delMenu", {id});
};
