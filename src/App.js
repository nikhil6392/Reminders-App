import { useState } from "react";
import InputForm from "./InputForm";
import FilterSelect from "./FilterSelect";
import RemaindersList from "./RemaindersList";

function App(){
  const [remainders,setRemainders]=useState();
  const [userInput,setUserInput]=useState();
  const [selectedFilter,setSelectedFilter]=useState("all");
  return(
    <div>
      <InputForm userInput={userInput}
                 setUserInput={setUserInput}/>
      <FilterSelect selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter} />

      <RemaindersList remainders={remainders}/>
    </div>
  )
  
}

export default App;