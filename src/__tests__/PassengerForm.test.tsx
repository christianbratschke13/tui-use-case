/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, render } from '@testing-library/react';
import PassengerForm from '../components/PassengerForm';
import { TitleEnum, GenderEnum } from '../types/enums';
import { Passenger } from '../types/interfaces';

afterEach(cleanup);
it('PassengerForm should change the form title according to the index', () => {
    const passenger: Passenger = {
        title: TitleEnum.MR,
        gender: GenderEnum.MALE,
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '2001-04-12',
    };

    const view = render(<PassengerForm passenger={passenger} index={0} setData={() => {}} setIsValid={() => {}} />);
    expect(view.getByText(`Edit Passenger 1`)).toBeTruthy();

    view.rerender(<PassengerForm passenger={passenger} index={3} setData={() => {}} setIsValid={() => {}} />);
    expect(view.getByText(`Edit Passenger 4`)).toBeTruthy();
});

it('PassengerForm should be invalid when more than three digits of a name field were changed', () => {
    const passenger: Passenger = {
        title: TitleEnum.MR,
        gender: GenderEnum.MALE,
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '2001-04-12',
    };

    const view = render(<PassengerForm passenger={passenger} index={0} setData={() => {}} setIsValid={() => {}} />);
});
