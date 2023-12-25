

import { Box } from "@mui/material";
import Home from "./Home";

import { LinkedIn, GitHub, Email } from '@mui/icons-material/';
import ContactMe from "./ContactMe";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Footer from "../header/Footer";

const FrontPage: React.FC = () => {
    return (
        <Box className="frontpage cover">
            <Home />
            <About />
            <Skills />
            <Projects />
            <ContactMe />
            <Footer />
        </Box>
    );
}

export default FrontPage;