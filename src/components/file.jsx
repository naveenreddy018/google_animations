import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./file.scss"

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimation() {
  useEffect(() => {
    // Select all the images in the container
    const images = document.querySelectorAll('.scroll-container .image');

    // Loop through each image and set up a ScrollTrigger animation
    images.forEach((image, index) => {
      gsap.fromTo(
        image,
        { opacity: 0, zIndex: images.length - index }, // Start fully transparent
        {
          opacity: 1, // Fade in
          zIndex: images.length - index, // Keep images stacked
          scrollTrigger: {
            trigger: '.scroll-container', // Trigger animation for this container
            start: `top+=${index * 200} center`, // Start animation staggered
            end: `top+=${(index + 1) * 200} center`, // End animation for this image
            scrub: true, // Smooth animation synced with scroll
          },
        }
      );
    });
  }, []);

  return (
    <div className="scroll-container">
      <h1>Scroll Up to Reveal Images</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s" alt="Image 1" className="image" />
      <img src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP" alt="Image 2" className="image" />
      <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/mysterious-fantasy-forest-with-old-bridges-free-image.jpg?w=600&quality=80" alt="Image 3" className="image" />
    </div>
  );
}

export default ScrollAnimation;
