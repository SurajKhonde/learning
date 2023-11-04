import { useState } from "react";
import { navData } from "../external/NavData";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import styles from "./sidenav.module.css"
import { NavLink } from "react-router-dom";

const Sidenav = () => {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
    setopen(!open)
}
     return (
      <div className={open?styles.sidenav:styles.sidenavClosed}>
    <div className={styles.menuBtn} onClick={toggleOpen} >
        {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
    </div>
    {navData.map(item =>{
        return <NavLink key={item.id} className={styles.sideitem}  to={item.link}>
 {item.icon}
 <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
 </NavLink>
        })}
 </div>
  )
}
export default Sidenav;