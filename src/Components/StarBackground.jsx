import React, { useEffect, useState } from 'react'

const StarBackground = () => { 

    const [stars, setStar] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
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
        // generateMeteors
    const generateMeteors = () => {
        const numberOfMeteors = 3

        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100 + window.innerWidth,
                y: Math.random() * 200 + window.innerHeight,
                opacity: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    }

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

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className='meteor animate-meteor'
                    style={{
                        position: 'absolute',
                        width: meteor.size + 'px',
                        height: meteor.size + 'px',
                        left: meteor.x + 'px',
                        top: meteor.y + 'px',
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + 's',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                    }}
                />
            ))}
        </div>
    )
}

export default StarBackground
