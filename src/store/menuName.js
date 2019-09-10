export const menuReducer = function(menuName = ["首页"], action) {
  let menuList = ["首页"];
  if (action.menu) {
    menuList.push(action.menu);
  }
  switch (action.type) {
    case "updateMenuName":
      return menuList;

    default:
      return menuName;
  }
};
export const updateMenuName = menu => ({
  type: "updateMenuName",
  menu: menu
});
