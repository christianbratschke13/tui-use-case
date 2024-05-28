import React, { FC } from 'react';
import { Passenger } from '../types/interfaces';
import { styled } from '@mui/material';

type Props = {
    passenger: Passenger;
};

const List = styled('dl')({
    display: 'grid',
    gridTemplateColumns: 'max-content auto',
});

const PassengerConfirmation: FC<Props> = ({ passenger }) => {
    const { title, gender, firstName, lastName, dateOfBirth } = passenger;

    return (
        <List>
            <dt>Title</dt>
            <dd>{title}</dd>
            <dt>Gender</dt>
            <dd>{gender}</dd>
            <dt>First name</dt>
            <dd>{firstName}</dd>
            <dt>Last name</dt>
            <dd>{lastName}</dd>
            <dt>Date of birth</dt>
            <dd>{dateOfBirth}</dd>
        </List>
    );
};

export default PassengerConfirmation;
