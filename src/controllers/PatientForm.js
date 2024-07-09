import React, { useState } from 'react';
import axios from 'axios';

const PatientForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [contact, setContact] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const patient = { name, age, gender, contact, medicalHistory: medicalHistory.split(',') };
        const { data } = await axios.post('/api/patients', patient);
        console.log(data);
    };

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
            <input type="text" placeholder="Medical History (comma separated)" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} />
            <button type="submit">Add Patient</button>
        </form>
    );
};

export default PatientForm;
