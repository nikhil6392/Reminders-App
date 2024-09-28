import PropTypes from "prop-types";

const InputForm = (props) => {
    const handleTextChange=(e)=>{
        const newUserInput = {...props.userInput,remainderText:e.target.value}
        props.setUserInput(newUserInput);
    }
    const handleDateChange = (e) =>{
        const date = new Date(e.target.value);
        const formattedDate = date.toISOString.substring(0,10);
        const newUserInput = {...props.userInput,dueDate:formattedDate};
        props.setUserInput(newUserInput);
    }
    const handleClick=(e)=>{
        e.preventDefault();
        const itemToAdd={...props.userInput,isComplete:false};
        props.addNewRemainder(itemToAdd)
    }    

  return (
    <form>
       <input className="block mx-auto my-4 p-2 rounded hover:ring-2" value={props.userInput.remainderText}
              id="remainderText"
              type='text'
              placeholder='What do you want to do ?'
              onChange={handleTextChange}/>
       <input className="block mx-auto my-2 p-2 hover:ring-2 rounded" value={props.userInput.dueDate}
              id="dueDate"
              type='date'
              onChange={handleDateChange}/>

        <button className="block mx-auto my-4 bg-blue-500 text-white border border-blue-600 rounded-lg shadow hover:bg-blue-600 ring" onClick={handleClick}>Add Item</button>
    </form>
  )
}

InputForm.propTypes={
    userInput:PropTypes.shape({
        remainderText:PropTypes.string,
        dueDate:PropTypes.string
    }),
    setUserInput: PropTypes.func,
    addNewRemainder: PropTypes.func
}

const date = new Date();
const formattedDate = date.toISOString().substring(0, 10);


InputForm.defaultProps = {
    userInput: {
        remainderText:"",
        dueDate:formattedDate
    }
}


export default InputForm;
