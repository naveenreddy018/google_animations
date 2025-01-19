import React, { useEffect, useState } from 'react';
import { assets } from "../../../assets/assets";
import "./homepart2.scss";

function Homepart2() {
    const [image, setImage] = useState(`${assets.image1}`);
    const [index, setIndex] = useState(0);

    const arr2 = [`${assets.image1}`, `${assets.image2}`, `${assets.image3}`];

    const content = [
        {
            title: "Customize your Chrome",
            text: "Personalize your web browser with themes, modes, and other options built just for you."
        },
        {
            title: "Improve Productivity",
            text: "Boost your efficiency with productivity-enhancing extensions and tools."
        },
        {
            title: "Explore Extensions",
            text: "Discover and add powerful extensions to enhance your browser."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImage(arr2[index]);
            setIndex((prev) => (prev + 1) % arr2.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [index, arr2]);

    return (
        <div className="container">
            {index === 0 ? (
                <img src={image} style={{ borderRadius: "50px", width: "500px", height: "auto" }} alt="Dynamic" />
            ) : (
                <img src={image} width="500px" height="auto" alt="Dynamic" />
            )}

            <div className="contain">
                {content.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            borderLeft: "5px solid lightgreen",
                            height: index === i ? "auto" : "860px",
                            padding: "10px",
                            transition: "all 0.5s ease",
                            opacity: index === i ? 1 : 0.7,
                        }}
                    >
                        <h1
                            style={{
                                color: "black"
                            }}
                        >
                            {item.title}
                        </h1>
                        <p
                            style={{
                                display: "block",
                                maxHeight: index === i ? "100px" : "0",
                                overflow: "hidden",
                                opacity: index === i ? 1 : 0,
                                transform: index === i ? "translateY(0)" : "translateY(-10px)",
                                transition: "all 1s ease",
                                color: "black",
                                fontSize: "1.5rem"
                            }}
                        >
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homepart2;
