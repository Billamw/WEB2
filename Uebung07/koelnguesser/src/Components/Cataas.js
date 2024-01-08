import React, { useEffect, useState } from "react";
import Box from "./Box.js";

const Cataas = () => {
    const [catData, setCatData] = useState(null);
    const [showJson, setShowJson] = useState(false);

    const fetchCat = () => {
        fetch("https://cataas.com/cat?json=true")
            .then((response) => response.json())
            .then((data) => {
                if (data.size > 40000) {
                    fetchCat();
                } else {
                    setCatData(data);
                }
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        fetchCat();
    }, []);

    return (
        <Box
            component={
                <div className="cataasContainer">
                    <div className="imageContainer">
                        <img
                            src={`https://cataas.com/cat/${catData?._id}`}
                            alt="cat"
                        />
                        <button onClick={fetchCat}>Load new cat</button>
                        <i
                            className="material-icons"
                            onClick={() => setShowJson(!showJson)}
                        >
                            {showJson ? "toggle_on" : "toggle_off"}
                        </i>
                    </div>
                    {showJson && <pre>{JSON.stringify(catData, null, 2)}</pre>}
                </div>
            }
        ></Box>
    );
};

export default Cataas;
