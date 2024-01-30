import { Button } from "@mui/material"
import { HeaderBtnProps } from "../types/props"
import { scroller } from 'react-scroll'

const HeaderBtn: React.FC<HeaderBtnProps> = (props) => {
    const handleNav = () => {
        props.closeDrawer();
        scroller.scrollTo(props.section, {
            duration: 800,
            delay: 0,
            smooth: true,
            offset: props.offset
        })       
    }

    return (
        <Button className="header-btn" variant="text" onClick={() => handleNav()}>{props.children}</Button>
    )
}

export default HeaderBtn;