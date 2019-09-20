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
  return axios.post("/findUser", attrs);
};

// 修改-新增用户信息的接口
export const handleUser = (userInfo, type, id) => {
  return axios.post("/handleUser", [userInfo, type, id]);
};

// 删除用户信息的接口
export const delUser = ids => {
  return axios.post("/delUser", { ids });
};

// 修改-新增菜单接口
export const handleMenu = (menuInfo, type, id) => {
  return axios.post("/handleMenu", [menuInfo, type, id]);
};

// 删除菜单接口
export const delMenu = id => {
  return axios.post("/delMenu", {id});
};

// 修改-新增按钮接口
export const handleButton = (buttonInfo,type,id) =>{
  return axios.post('/handleButton',[buttonInfo,type,id])
}

// 删除按钮接口
export const delButton = ids => {
  return axios.post("/delButton",{ids})
}

// 查询所有角色信息的接口
export const findRole = attrs => {
  return axios.post("/findRole", attrs);
};

// 修改-新增角色信息的接口
export const handleRole = (roleInfo, type, id) => {
  return axios.post("/handleRole", [roleInfo, type, id]);
};

// 删除角色信息的接口
export const delRole = ids => {
  return axios.post("/delRole", { ids });
};