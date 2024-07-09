import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppointmentForm from '../components/AppointmentForm';

const AppointmentPage = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const { data } = await axios.get('/api/appointments');
            setAppointments(data);
        };
        fetchAppointments();
    }, []);

    return (
        <div>
            <h1>Appointments</h1>
            <AppointmentForm />
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment._id}>{appointment.date} - {appointment.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentPage;
