import { GenderEnum, TitleEnum } from './enums';

export interface Passenger {
    title: TitleEnum;
    gender: GenderEnum;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
}
