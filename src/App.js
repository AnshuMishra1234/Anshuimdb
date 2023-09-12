import React from 'react';

import NewExpense from './Components/NewExpense/NewExpense';


import Expenses from "./Components/Expenses/Expenses";

function App(){
    let expenses=[
        {
            id: 'e1',
            title:'school fee',
            amount: 250,
            date: new Date(2021,5,12)

    },
    {
        id: 'e2',
        title:'Books',
        amount: 350,
        date: new Date(2021,5,12)

},
{
    id: 'e3',
    title:'copy',
    amount: 450,
    date: new Date(2021,5,12)

},
{
    id: 'e4',
    title:'library',
    amount: 550,
    date: new Date(2021,5,12)

}
];

    // let expenseDate= new Date(2021,3,28);
    // let expenseTitle="School fee";
    // let expenseAmount=300;
    
    return(
        <div>
        <NewExpense />
            
            <Expenses item={expenses} />
       
        </div>
        
    )
}

export default App;