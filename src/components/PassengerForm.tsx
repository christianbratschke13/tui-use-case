import React, { FC, useEffect } from 'react';
import { Passenger } from '../types/interfaces';
import { InputLabel, MenuItem, FormControl, Select, Card, CardContent, CardHeader } from '@mui/material';
import { TitleEnum, GenderEnum } from '../types/enums';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { format } from 'date-fns';

import { Formik, Form, Field, useFormikContext } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import { maxThreeDigitsAllowedValidator } from '../utils/validators';

type Props = {
    passenger: Passenger;
    index: number;
    setIsValid: (index: number, isValid: boolean) => void;
    setData: (index: number, data: Passenger) => void;
};

type ContextHandlerProps = {
    index: number;
    setIsValid: (index: number, isValid: boolean) => void;
    setData: (index: number, data: Passenger) => void;
};

const ContextHandler: FC<ContextHandlerProps> = ({ index, setIsValid, setData }) => {
    const { values, isValid } = useFormikContext();
    useEffect(() => {
        setIsValid(index, isValid);
        setData(index, values as Passenger);
    }, [isValid, values]);

    return null;
};
const PassengerForm: FC<Props> = ({ passenger, index, setIsValid, setData }) => {
    const initialValues = {
        title: passenger.title,
        gender: passenger.gender,
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        dateOfBirth: passenger.dateOfBirth,
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required').test(maxThreeDigitsAllowedValidator(initialValues.firstName)),
        lastName: Yup.string().required('Required').test(maxThreeDigitsAllowedValidator(initialValues.lastName)),
    });

    const onSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <Card variant="elevation" sx={{ marginBlock: '1rem' }}>
            <CardHeader title={`Edit Passenger ${index + 1}`}></CardHeader>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange
            >
                {({ dirty, isValid, values, handleChange, handleBlur, setFieldValue }) => {
                    return (
                        <Form>
                            <CardContent>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                                    <InputLabel id="title">Title</InputLabel>
                                    <Select
                                        labelId="title"
                                        name="title"
                                        value={values.title}
                                        label="Title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        {Object.keys(TitleEnum).map((item) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }}>
                                    <InputLabel id="gender">Gender</InputLabel>
                                    <Select
                                        labelId="gender"
                                        name="gender"
                                        value={values.gender}
                                        label="Gender"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        {Object.keys(GenderEnum).map((item) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <Field
                                        label="First name"
                                        name="firstName"
                                        variant="standard"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        component={TextField}
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <Field
                                        label="Last name"
                                        name="lastName"
                                        variant="standard"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        component={TextField}
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Date of birth"
                                            value={values.dateOfBirth}
                                            slotProps={{ textField: { variant: 'standard' } }}
                                            onChange={(value) =>
                                                setFieldValue('dateOfBirth', format(value as string, 'yyyy-MM-dd'))
                                            }
                                            disableFuture
                                        />
                                    </LocalizationProvider>
                                </FormControl>
                                <ContextHandler index={index} setIsValid={setIsValid} setData={setData} />
                            </CardContent>
                        </Form>
                    );
                }}
            </Formik>
        </Card>
    );
};

export default PassengerForm;
