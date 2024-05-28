/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, render } from '@testing-library/react';
import PassengerDetails from '../components/PassengerDetails';
import { TitleEnum, GenderEnum } from '../types/enums';
import { Passenger } from '../types/interfaces';

afterEach(cleanup);
it('PassengerDetails should render all passenger forms', () => {});
