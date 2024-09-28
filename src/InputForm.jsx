import PropTypes from "prop-types";

const InputForm = (props) => {
  return (
    <form>
       <input value={props.userInput.remainderText}
              id="remainderText"
              type='text'
              placeholder='What do you want to do ?'/>
       <input value={props.userInput.dueDate}
              id="dueDate"
              type='date'/>
        <button>Add Item</button>
    </form>
  )
}

InputForm.propTypes={
    userInput:PropTypes.shape({
        remainderText:PropTypes.string,
        dueDate:PropTypes.string
    }),
    setUserInput: PropTypes.func
}

const date = new Date();
const formattedDate = date.toISOString().substring(0, 10);


InputForm.defaultProps = {
    userInput: {
        remainderText:"",
        dueDate:formattedDate
    }
}
const handleTextChange=(e)=>{
    const newUserInput = {...props.userInput,remainderTest:e.target.value}
    props.setUserInput(newUserInput);
}

const handleDateChange = (e) =>{
    const date = new Date(e.target.value);
    const formattedDate = date.toISOString.subString(0,10);
    const newUserInput = {...props.userInput,dueDate:formattedDate};
    props.setUserInput(newUserInput)

}

export default InputForm;
