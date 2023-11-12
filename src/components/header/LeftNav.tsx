import { Box, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LeftNav: React.FC = () => {
    return (
        <Box className="leftNav" sx={{ flexGrow: 1 }}>
            <Button>Home</Button>
            <Button>Nav 1</Button>
        </Box>
    )
}