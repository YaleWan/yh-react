export const  menuReducer = function (menuName = '首页',action) {
    console.log('action', action)
    menuName = action.menuName || '首页'
    switch (action.type) {
        case 'updateMenuName':
            return menuName
    
        default:
            return menuName
    }
}
export const updateMenuName = menuName => ({type:'updateMenuName',menuName : menuName})
