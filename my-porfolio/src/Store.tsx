import React from "react";
import { UserInfo } from "./types/UserInfo";

// const colorMode = ['dark', 'ligth', 'green', 'yellow', 'red']
// function random () {
//     let random = Math.floor(Math.random() * colorMode.length)
//     return random
// }

type AppState = {
  //   mode: string;
  userInfo?: UserInfo;
};

const initialState: AppState = {
  // with this we keep user auth after login
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null,
  //   mode: localStorage.getItem("mode")
  //     ? localStorage.getItem("mode")!
  //     : colorMode[random()],
};

type Action = 
// | { type: 'SWITCH_MODE'}
| {type: 'USER_SIGNIN'; payload: UserInfo}
| { type: 'USER_SIGNOUT' }

function reducer(state:AppState, action:Action):AppState {
  switch(action.type){
//  case 'SWITCH_MODE':
//    return {mode: colorMode[random()]}
    case 'USER_SIGNIN':
      return {...state, userInfo: action.payload }
      case 'USER_SIGNOUT':
        // we clear all data. because we dont put in return state userInfo it will be null
      return {}
    default:
      return state
  }
}

const defaultDispatch: React.Dispatch<Action> = () => initialState

const Store = React.createContext({
    state: initialState,
    dispatch: defaultDispatch
})

// eslint-disable-next-line @typescript-eslint/ban-types
function StoreProvider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer<React.Reducer<AppState, Action>>(reducer, initialState)
    return <Store.Provider value={{ state, dispatch }} {...props} />
}

export { Store, StoreProvider }