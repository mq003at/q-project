

import { Box } from "@mui/material";
import Avatar from "../../assets/avatar.jpg";

const FrontPage: React.FC = () => {
    
    return(
        <Box className="frontpage cover">
            <Box className="home">
                <Box className="img-div">
                    <Box className="img-avatar" component={"img"} alt="Default Avatar" src={Avatar}></Box>
                </Box>
                <Box className="say-hi">HI THERE! MY NAME IS</Box>
                <Box className="my-name">QUAN NGUYEN</Box>
                <Box className="a">A</Box>
                <Box className="title">FULLSTACK DEVELOPER</Box>
                <Box className="who">who passionate about creating interactive applications and experiences on the web.</Box>
            </Box>
        </Box>
    )
}

export default FrontPage;