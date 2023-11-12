import { Button } from "@mui/material"
import { HeaderBtnProps } from "../types/props"
import { useNavigate } from "react-router-dom"
import { scroller } from 'react-scroll'

const HeaderBtn: React.FC<HeaderBtnProps> = (props) => {
    const navigate = useNavigate();
    const handleNav = () => {
        navigate(props.section);
        scroller.scrollTo(props.section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })       
    }

    return (
        <Button className="header-btn" variant="text" onClick={() => handleNav()}>{props.children}</Button>
    )
}

export default HeaderBtn;