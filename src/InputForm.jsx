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
       <input value={props.userInput.remainderText}
              id="remainderText"
              type='text'
              placeholder='What do you want to do ?'
              onChange={handleTextChange}/>
       <input value={props.userInput.dueDate}
              id="dueDate"
              type='date'
              onChange={handleDateChange}/>

        <button onClick={handleClick}>Add Item</button>
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
