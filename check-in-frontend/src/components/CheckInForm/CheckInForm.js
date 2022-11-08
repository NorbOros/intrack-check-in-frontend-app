import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { STATUSES } from '../../constants/statuses';
import { fetchAppointmentById } from '../../service/check-in-api-service';
import { checkInActions } from '../../store/slices/check-in-slice';

const CheckInForm = (props) => {
    const dispatch = useDispatch();

    const onSubmitForm = async (formValue) => {
        const appointment = await fetchAppointmentById(formValue.appointmentId);
        dispatch(checkInActions.updateAppointment(appointment));

        if (appointment.status === STATUSES.NOT_FOUND) {
            props.setChildComponent(appointment.status);
        } else {
            props.setChildComponent(STATUSES.APPOINTMENT);
        }
    };

    const resetForm = (form) => {
        form.reset();
    }

    const homeClickHandler = (childComponent) => {
        props.setChildComponent(childComponent);
    }

    return (
        <div className='align-middle'>
            <h3 className='d-flex justify-content-center mb-4'>Please enter your registration number</h3>
            <Form
                onSubmit={onSubmitForm}
                initialValues={{ appointmentId: '' }}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='d-grid gap-2'>
                            <Field name='appointmentId'
                                component='input'
                                type='text'
                                autoComplete='none'
                                placeholder='Registration number'
                                className='form-control'
                            />
                            <button className='btn btn-success btn-lg'
                                type='submit'
                                disabled={submitting || pristine}>Search</button>
                            <button className='btn btn-light btn-sm'
                                onClick={() => resetForm(form)}
                                disabled={submitting || pristine}>Clear</button>
                            <button className='btn btn-light btn-sm'
                                onClick={() => homeClickHandler()}>Back</button>
                        </div>
                    </form>
                )}
            />
        </div>
    );
}

export default CheckInForm;