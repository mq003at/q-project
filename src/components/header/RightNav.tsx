import { Box, Button } from "@mui/material"

export const RightNav: React.FC = () => {
    return (
        <Box className="rightNav" sx={{ flexGrow: 1 }}>
            <Button>Home</Button>
            <Button>Nav 1</Button>
        </Box>
    )
}