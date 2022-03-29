import React, { useState } from 'react'
import BudgetContext from './budgetContext'

const BudgetState = (props) => {
    const [budget, setbudget] = useState(0)

  return (
    <BudgetContext.Provider value={{budget,setbudget}}>
        {props.children}
    </BudgetContext.Provider>
  )
}

export default BudgetState