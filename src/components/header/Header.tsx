import { AppBar, Box, Container, Toolbar } from "@mui/material"
import logo from '../../assets/Q-logo-letter-green.png';
import HeaderBtn from "./HeaderBtn";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const Header: React.FC = () => {
    return (
        <Box className="header wrapper">
            <AppBar className="header appbar" position="fixed">
                <Container className="container">
                    <Toolbar className="toolbar" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Box className="main-logo wrapper" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={logo} alt="placeholder-logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </Box>
                        <HeaderBtn section="home" icon={<HomeOutlinedIcon />}>Home</HeaderBtn>
                        <HeaderBtn section="home" icon={<HomeOutlinedIcon />}>About Me</HeaderBtn>
                        <HeaderBtn section="home" icon={<HomeOutlinedIcon />}>Skills</HeaderBtn>
                        <HeaderBtn section="home" icon={<HomeOutlinedIcon />}>Project</HeaderBtn>
                        <HeaderBtn section="home" icon={<HomeOutlinedIcon />}>Contact</HeaderBtn>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
