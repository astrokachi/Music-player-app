import React, {createContext, useEffect, useState } from 'react'

export const StateContext = createContext({})

const StateWrapper = ({children}) => {
    const [toggle, setToggle] = useState({
        open: false,
        close: false,
      });

      useEffect(() => {
        if(toggle.close){
          setTimeout(() => {
            setToggle({open: false, close: false})
          }, 1000)
        }
      }, [toggle.close])


  return (
    <StateContext.Provider value={{toggle,setToggle}}>
        {children}
    </StateContext.Provider>
  )
}

export default StateWrapper