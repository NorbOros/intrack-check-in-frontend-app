import { useState } from "react";
import { useSelector } from "react-redux";
import { STATUSES } from "../../constants/statuses";
import Appointment from "../Appointment/Appointment";
import AppointmentChooser from "../AppointmentChooser/AppointmentChooser";
import CheckInForm from "../CheckInForm/CheckInForm";
import NotFound from "../NotFound/NotFound";

const Home = () => {
    const appointment = useSelector(state => state.checkInReducer.appointment);
    const [childComponent, setChildComponent] = useState('');

    const parseChildComponent = () => {
        switch (childComponent) {
            case STATUSES.CHECK_IN_FORM:
                return <CheckInForm setChildComponent={setChildComponent} />;
            case STATUSES.APPOINTMENT:
                return <Appointment appointment={appointment} setChildComponent={setChildComponent} />;
            case STATUSES.NOT_FOUND:
                return <NotFound registrationNm={appointment.id} setChildComponent={setChildComponent} />
            default:
                return <AppointmentChooser setChildComponent={setChildComponent} />
        }
    }

    return (
        <div className='vh-100 vw-100 d-flex justify-content-center align-items-center'>
            {parseChildComponent()}
        </div>
    );
}

export default Home;