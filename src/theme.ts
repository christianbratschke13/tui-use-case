import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0F2E69',
            light: '#E6F5FE',
        },
    },
    components: {
        MuiCardHeader: {
            styleOverrides: {
                title: {
                    fontSize: '1rem',
                },
            },
        },
    },
});
