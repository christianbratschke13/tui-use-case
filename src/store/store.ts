import { GenderEnum, TitleEnum } from '../types/enums';
import { Passenger } from '../types/interfaces';

export const passengers: Passenger[] = [
    {
        title: TitleEnum.MRS,
        gender: GenderEnum.FEMALE,
        firstName: 'Jane',
        lastName: 'Doe',
        dateOfBirth: '2003-08-31',
    },
    {
        title: TitleEnum.MR,
        gender: GenderEnum.MALE,
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '2001-04-12',
    },
];
