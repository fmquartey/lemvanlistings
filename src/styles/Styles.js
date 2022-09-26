import { createTheme } from '@mui/material/styles';

const color = { defaultColor: "#35BF43" }

const theme = createTheme({
    palette: {
        primary: {
            main: color.defaultColor,
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

export default theme