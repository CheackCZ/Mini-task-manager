import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#F0F0F2",
        },
        secondary: {
            main: "#272729",
        },
        error: {
            main: "#EE4B2B",
        },
        text: {
            primary: "#1D1D1F",
            secondary: "#0177ED",            
        },
    },
});

export default theme;
