import React from "react";
import './footer.css'

const Footer=()=>{
    const year= new Date();
    const currentDate = year.getFullYear()

    return(
        <footer>
            <p>Copyright © {currentDate}</p>
        </footer>
    )
}

export default Footer;