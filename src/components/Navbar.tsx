// Import of MUI Components
import { AppBar, Box, Typography } from "@mui/material";


function Navbar() {

    return (

        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'primary.light' }}>
                <Typography variant="h1" sx={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: 36, fontWeight: 'bold', mt: 2, mb: 2}}>
                    Mini TaskManager
                </Typography>
            </AppBar>
        </Box>
    );

}

export default Navbar;