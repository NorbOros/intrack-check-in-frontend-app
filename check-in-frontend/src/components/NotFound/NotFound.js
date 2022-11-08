import { useDispatch } from "react-redux";
import { checkInActions } from "../../store/slices/check-in-slice";

const NotFound = (props) => {
    const registrationNm = props.registrationNm;
    const dispatch = useDispatch();

    const backClickHandler = (childComponent) => {
        dispatch(checkInActions.resetAppointment());
        props.setChildComponent(childComponent);
    }

    return (
        <div className='d-grid gap-3'>
            <h3 className='p-3'>Registration number not found</h3>
            <h6 className='d-flex justify-content-center'>Please check your registration number</h6>
            <h6 className='d-flex justify-content-center'>{registrationNm}</h6>
            <button className='btn btn-light btn-lg'
                onClick={() => backClickHandler()}>Back</button>
        </div>
    );
}

export default NotFound;