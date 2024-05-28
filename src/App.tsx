import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import PassengerDetails from './components/PassengerDetails';

function App() {
    return (
        <div className="App">
            <Container maxWidth="md">
                <PassengerDetails />
            </Container>
        </div>
    );
}

export default App;
