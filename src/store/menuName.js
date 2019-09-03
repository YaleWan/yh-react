export const menuReducer = function(menuName = ["首页"], action) {
    if (action.menuName) {
      menuName.push(action.menuName);
    }
  switch (action.type) {
    case "updateMenuName":
      return [...menuName];

    default:
      return menuName;
  }
};
export const updateMenuName = menuName => ({
  type: "updateMenuName",
  menuName: menuName
});
