import axios from 'axios';
import { STATUSES } from '../constants/statuses';

const checkInServiceBaseUrl = process.env.REACT_APP_CHECKIN_SERVICE_BASE_URL;
const v1CheckInRoot = process.env.REACT_APP_V1_CHECKIN_ROOT_URL;

export const fetchAppointmentById = async (appointmentId) => {
    return await axios.get(checkInServiceBaseUrl + v1CheckInRoot + "/" + appointmentId)
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch(error => {
            if (error.response.status === 404) {
                return { 'id': appointmentId, 'status': STATUSES.NOT_FOUND };
            }
        });
}

export const checkInToAppointment = async (checkInRequest) => {
    return await axios.post(checkInServiceBaseUrl + v1CheckInRoot, checkInRequest)
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch(error => {
            return error;
        });
}


