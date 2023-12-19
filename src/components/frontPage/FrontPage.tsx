

import { Box } from "@mui/material";
import Home from "./Home";

import { LinkedIn, GitHub, Email } from '@mui/icons-material/';
import ContactMe from "./ContactMe";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";

const FrontPage: React.FC = () => {
    return (
        <Box className="frontpage cover">
            <Home />
            <About />
            <Projects />
            <Skills />
            <ContactMe />
        </Box>
    );
}

export default FrontPage;