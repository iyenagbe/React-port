import React, { useEffect, useState } from 'react'

const StarBackground = () => { 

    const [stars, setStar] = useState([]);

    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStar(newStars);
    };

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className='star animate-pulse-subtle'
                    style={{
                        position: 'absolute',
                        width: star.size + 'px',
                        height: star.size + 'px',
                        left: star.x + 'px',
                        top: star.y + 'px',
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                    }}
                />
            ))}
        </div>
    )
}

export default StarBackground
