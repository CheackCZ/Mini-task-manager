// Import of MUI Components
import { Box, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

type Props = {
    onClick: () => void;
}

function FloatingActionButton({onClick}: Props) {

    return (

        <Box sx={{ "& > :not(style)": { m: 1 }}}>
            <Fab onClick={onClick} color="secondary" aria-label="add" sx={{position: "fixed", bottom: 16, right: 16 }}>
                <AddIcon />
            </Fab>
        </Box>

    );

}

export default FloatingActionButton;