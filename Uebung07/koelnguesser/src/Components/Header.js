import React from "react";

const Header = ({ headerName }) => {
    return (
        <div className="header">
            <p>Hey {headerName}</p>
            <p>Koelnguesser</p>
        </div>
    );
};

export default Header;
