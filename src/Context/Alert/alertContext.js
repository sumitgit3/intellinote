import { createContext, useState } from "react";

const alertContext = createContext();



const AlertProvider = (props) => {
    const [alert,setAlert] = useState(null);
    const showAlert = (msg, type) => {
        setAlert({
          msg: msg,
          type: type
        });
        setTimeout(() => {
          setAlert(null);
        }, 1500);
      }
  return (
    <>
        <alertContext.Provider value={{alert,showAlert}} >
            {props.children}
        </alertContext.Provider> 
    </>
  )
}

export {alertContext,AlertProvider};
export default alertContext;
