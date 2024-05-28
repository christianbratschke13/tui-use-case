import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { passengers } from '../store/store';
import PassengerForm from './PassengerForm';
import { GroupsOutlined } from '@mui/icons-material';
import { theme } from '../theme';
import { useEffect, useState } from 'react';
import { Page } from '../types/enums';
import { Passenger } from '../types/interfaces';
import PassengerConfirmation from './PassengerConfirmation';

const PassengerDetails = () => {
    const [formsValid, setFormsValid] = useState<{ [x: number]: boolean }>({});
    const [isValid, setIsValid] = useState(false);
    const [page, setPage] = useState(Page.EDIT);
    const [updatedData, setUpdatedData] = useState<{ [x: number]: Passenger }>({});

    const setData = (index: number, data: Passenger) => {
        setUpdatedData({ ...updatedData, [index]: data });
    };

    const setChildValid = (index: number, isValid: boolean) => {
        setFormsValid({ ...formsValid, [index]: isValid });
    };

    useEffect(() => {
        setIsValid(Object.values(formsValid).every((form) => !!form));
    }, [formsValid]);

    return (
        <Accordion sx={{ border: '2px solid black' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <GroupsOutlined
                    color="primary"
                    sx={{
                        background: theme.palette.primary.light,
                        borderRadius: '50%',
                        padding: '0.5rem',
                        marginRight: '1rem',
                    }}
                />
                <Typography
                    color="primary"
                    sx={{
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '3rem',
                        textTransform: 'uppercase',
                        fontWeight: '700',
                    }}
                >
                    Passenger Details
                </Typography>
                <Typography color="primary" sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span>2 Adults</span>
                    <span>0 Child</span>
                    <span>0 Infant</span>
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    background: theme.palette.primary.light,
                }}
            >
                {page === Page.EDIT &&
                    passengers.map((passenger, i) => (
                        <PassengerForm
                            passenger={passenger}
                            index={i}
                            key={i}
                            setIsValid={setChildValid}
                            setData={setData}
                        />
                    ))}
                {page === Page.CONFIRM && (
                    <Card variant="elevation" sx={{ marginBlock: '1rem' }}>
                        <CardHeader title="Do you really want to save the following changes?"></CardHeader>
                        <CardContent>
                            {Object.values(updatedData).map((passenger, i) => (
                                <>
                                    <PassengerConfirmation passenger={passenger} />
                                    {i < Object.values(updatedData).length - 1 && <Divider />}
                                </>
                            ))}
                        </CardContent>
                    </Card>
                )}
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Button variant="contained" sx={{ padding: '1rem 6rem' }} onClick={() => setPage(Page.EDIT)}>
                        BACK
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ padding: '1rem 6rem' }}
                        disabled={!isValid}
                        onClick={() => setPage(Page.CONFIRM)}
                    >
                        NEXT
                    </Button>
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
};

export default PassengerDetails;
