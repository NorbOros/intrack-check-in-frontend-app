import { useDispatch } from "react-redux";
import { STATUSES } from "../../constants/statuses";
import { checkInToAppointment } from "../../service/check-in-api-service";
import { checkInActions } from "../../store/slices/check-in-slice";

const Appointment = (props) => {
    const dispatch = useDispatch();
    const { title, id, date, status, registrationNm } = props.appointment;

    const checkInClickHandler = async () => {
        dispatch(checkInActions.updateAppointment(await checkInToAppointment({ appointmentId: id })));
    }

    const homeClickHandler = () => {
        dispatch(checkInActions.resetAppointment());
        props.setChildComponent();
    }

    const getStatus = () => {
        switch (status) {
            case STATUSES.CHECKED_IN:
                return 'You are successfully checked in';
            case STATUSES.CREATED:
                return 'For ticket number please click to the Check In button'
            default:
                return '';
        }
    }
    return (
        <div className='d-grid gap-2'>
            <h3 className='d-flex justify-content-center p-2'>{title}</h3>
            <h4 className='d-flex justify-content-center'>{date}</h4>
            <h4 className='d-flex justify-content-center'>{getStatus()}</h4>
            {status === STATUSES.CHECKED_IN &&
                <div className='d-flex align-items-center flex-column'>
                    <h4 className='mb-4'>Your ticket Number</h4>
                    <h4 className='d-flex justify-content-center'>{registrationNm}</h4>
                </div>}
            <div className='d-grid gap-2 p-3'>
                {status === STATUSES.CREATED &&
                    <button className='btn btn-success btn-lg' onClick={checkInClickHandler}>
                        Check In
                    </button>}
                <button className='btn btn-light btn-sm' onClick={homeClickHandler}>Back</button>
            </div>
        </div>
    );
}

export default Appointment;
