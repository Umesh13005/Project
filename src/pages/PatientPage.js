import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PatientForm from '../components/PatientForm';

const PatientPage = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const { data } = await axios.get('/api/patients');
            setPatients(data);
        };
        fetchPatients();
    }, []);

    return (
        <div>
            <h1>Patients</h1>
            <PatientForm />
            <ul>
                {patients.map(patient => (
                    <li key={patient._id}>{patient.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PatientPage;
