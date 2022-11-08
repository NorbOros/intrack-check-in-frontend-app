import { useDispatch } from "react-redux";
import { STATUSES } from "../../constants/statuses";
import { checkInToAppointment } from "../../service/check-in-api-service";
import { checkInActions } from "../../store/slices/check-in-slice";

const AppointmentChooser = (props) => {
    const dispatch = useDispatch();

    const onClickHandler = async (childComponent, title) => {
        dispatch(checkInActions.updateAppointment(await checkInToAppointment({ title: title })));
        props.setChildComponent(childComponent);
    }

    return (
        <div className='align-middle col-3'>
            <div className='d-grid gap-3'>
                <button className='btn btn-outline-success btn-lg'
                    onClick={() => onClickHandler(STATUSES.APPOINTMENT, 'Driving license related administration')}>Driving license</button>
                <button className='btn btn-outline-success btn-lg'
                    onClick={() => onClickHandler(STATUSES.APPOINTMENT, 'Passport related administration')}>Passport</button>
                <button className='btn btn-outline-success btn-lg'
                    onClick={() => onClickHandler(STATUSES.APPOINTMENT, 'Other')}>Other</button>
                <button className='btn btn-outline-success btn-lg'
                    onClick={() => onClickHandler(STATUSES.CHECK_IN_FORM)}>Registered Appointment</button>
            </div>
        </div>
    );
}

export default AppointmentChooser;