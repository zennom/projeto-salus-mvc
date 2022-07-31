type MenuOptions = '' | 'index' | 'info' | 'testes' | 'comunidade' | 'sobre' | 'login'

export const createMenuObject = (activeMenu: MenuOptions) =>{
    let returnObject = {
        index:false,
        info:false,
        testes:false,
        comunidade:false,
        sobre:false,
        login:false
    }
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }
    return returnObject
}
