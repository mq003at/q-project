
import { Box, Button } from "@mui/material";
import Avatar from "../../assets/avatar-2500.jpg";
import { useState } from "react";

import { LinkedIn, GitHub, Email } from '@mui/icons-material/';
const Home: React.FC = () => {
    const randomAdj: string[] = ["PASSIONATE", "ENTHUSIASTIC", "DEVOTED", "COMITTED", "DEDICATED", "DYNAMIC"]
    const [chosenAdj, setChosenAdj] = useState<[string, number]>(["PASSIONATE", 0]);

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [count, setCount] = useState<number>(1);
    const [toggle, setToggle] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setCount(count + 1);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const replaceAdj = () => {
        let rI: number;
        do {
            rI = Math.floor(Math.random() * randomAdj.length);
        } while (rI === chosenAdj[1])

        setToggle(true);

        setTimeout(() => {
            setChosenAdj([randomAdj[rI], rI]);
            setToggle(false);
        }, 500);
    }

    return (
        <Box className="home section">
            <Box className="img-div">
                <Box className="img-avatar" style={{ transform: isHovered ? `rotate(${count * 360}deg)` : `rotate(${count * 360}deg)` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} component={"img"} alt="Default Avatar" src={Avatar}></Box>
            </Box>
            <Box className="text-div">
                <Box className="say-hi">HI THERE! MY NAME IS</Box>
                <Box className="my-name">QUAN NGUYEN</Box>
                <Box className="passionate">
                    <span>YOUR</span>
                    <Box className={`adjective ${toggle}`} onClick={() => replaceAdj()}>{chosenAdj[0]}</Box>
                </Box>
                <Box className="title">FULLSTACK DEVELOPER</Box>
                <Box className="who">
                    <div className="on">ON HIS </div>
                    <div className="text-wrapper">
                        <span className="journey-1">PATH TO BECOME A GREAT DEVELOPER</span>
                        <span className="journey-2">JOURNEY IN THE WORLD OF TECHNOLOGY</span>
                        <span className="journey-3">EXPLORATION OF THE MACHINE'S POTENTIAL</span>
                        <span className="journey-4">ADVENTURE IN THE CODING REALM</span>
                    </div>
                </Box>
                <Box className="direct-wrapper">
                    <Button className="resume">Resume</Button>
                    <Box className="other-direct">
                        <LinkedIn className="icon" />
                        <GitHub className="icon" />
                        <Email className="icon" />
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default Home