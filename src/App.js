import { useState } from "react";
import InputForm from "./InputForm";
import FilterSelect from "./FilterSelect";
import RemaindersList from "./RemaindersList";
import "./index.css";


function App(){

  const [remainders,setRemainders]=useState([]);
  function setIsComplete(isComplete,index){
    const newRemainders=[...remainders.slice(0,index),
                        {...remainders[index],isComplete},
                        ...remainders.slice(index+1)
    ];
    setRemainders(newRemainders);
}
  const [userInput, setUserInput] = useState({
    remainderText: "",
    dueDate: new Date().toISOString().substring(0, 10),
  })
  const [selectedFilter,setSelectedFilter]=useState("all");

  const addNewRemainder = (itemToAdd) => {
    if (remainders.length === 0) {
      // If the remainders list is empty, initialize it with the first item
      setRemainders([itemToAdd]);
    } else {
      // Append new remainder to the existing list
      setRemainders([...remainders, itemToAdd]);
    }
  }

  const filteredList=filterList(remainders,selectedFilter);

  function filterList(remainders,selectedFilter){
    if(selectedFilter ==="all"){
      return remainders;
    }else {
      let numberOfDays;

      switch (selectedFilter){
            case "2day":
              numberOfDays=2;
              break;
            case "1week":
              numberOfDays=7;
              break;
            case "30days":
              numberOfDays=30;
              break;
            default:
              numberOfDays=0;
              break;    
      }

      const result =remainders.filter(remainder=>{
        const todaysDate = new Date().toISOString().substring(0,10);
        const todayTime = new Date(todaysDate).getTime();
        const  dueTime=new Date(remainder.dueDate).getTime();
        return dueTime <(todayTime + (numberOfDays*24*60*60*1000));
      });
      return result;
    }
        
  }
  return(
    <div>
      <InputForm userInput={userInput}
                 setUserInput={setUserInput}
                 addNewRemainder={addNewRemainder}/><br/>
      <FilterSelect selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter} />

      <RemaindersList remainders={filteredList} setIsComplete={setIsComplete}/>
    </div>
  )
  

}


export default App;