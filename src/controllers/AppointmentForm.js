import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
    const [patientId, setPatientId] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const appointment = { patientId, doctorId, date, time };
        const { data } = await axios.post('/api/appointments', appointment);
        console.log(data);
    };

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Patient ID" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
            <input type="text" placeholder="Doctor ID" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
            <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="time" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
            <button type="submit">Add Appointment</button>
        </form>
    );
};

export default AppointmentForm;
