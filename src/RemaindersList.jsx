import Remainder from "./Remainder"
import PropTypes from "prop-types"

const RemaindersList = (props) => {
    const remainders=props.remainders.map((remainder,index)=>{
        return(
            <Remainder remainderText={remainder.remainderText}
                       dueDate={remainder.dueDate}
                       isComplete={remainder.isComplete}
                       setIsComplete={props.setIsComplete}
                       id={index}
                       key={index} /> 
        )
    });

    return (
        <div>
            {remainders}
        </div>
    );
}

RemaindersList.propTypes = {
    remainders: PropTypes.arrayOf(
        PropTypes.shape({
            remainderText: PropTypes.string.isRequired,
            dueDate: PropTypes.string.isRequired,
            isComplete: PropTypes.bool.isRequired
        })
    )
};


const date = new Date();
const formattedDate = date.toISOString().substring(0,10);

RemaindersList.defaultProps = {
    remainders:[{
        remainderText:"No Remainders Yet",
        dueDate: formattedDate,
        isComplete:false
    }]
}
export default RemaindersList
