import React from "react";

function Footer() {
    const currentDate = new Date().getFullYear();
    console.log(currentDate);

    return (
        <footer>
            <p>Copyright &#169; {currentDate}</p>
        </footer>
    );
}

export default Footer;
