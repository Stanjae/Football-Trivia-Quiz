import React, { createContext, useState } from 'react'


export const AppContext = createContext(null);


export const NewContext = ({children}) => {
    const [mydetails, setMydetails] = useState(null);

    const [answeredQuestions, setAnsweredQuestions] = useState([])

   const todocontrols = {setMydetails, mydetails, answeredQuestions, setAnsweredQuestions};
  return (
    <AppContext.Provider value={todocontrols}>{children}</AppContext.Provider>
  )
}