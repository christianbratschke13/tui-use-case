/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, render } from '@testing-library/react';
import PassengerConfirmation from '../components/PassengerConfirmation';
import { Passenger } from '../types/interfaces';
import { GenderEnum, TitleEnum } from '../types/enums';

afterEach(cleanup);
it('PassengerConfirmation should render the complete data of one passenger', () => {
    const passenger: Passenger = {
        title: TitleEnum.MR,
        gender: GenderEnum.MALE,
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '2001-04-12',
    };

    const view = render(<PassengerConfirmation passenger={passenger} />);

    expect(view.getByText(passenger.title)).toBeTruthy();
    expect(view.getByText(passenger.gender)).toBeTruthy();
    expect(view.getByText(passenger.firstName)).toBeTruthy();
    expect(view.getByText(passenger.lastName)).toBeTruthy();
    expect(view.getByText(passenger.dateOfBirth)).toBeTruthy();
});
