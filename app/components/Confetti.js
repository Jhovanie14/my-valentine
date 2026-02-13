'use client';

import { useEffect } from 'react';

export default function Confetti() {
  useEffect(() => {
    const confetti = Array.from({ length: 50 }).map((_, i) => {
      const element = document.createElement('div');
      element.style.position = 'fixed';
      element.style.width = '10px';
      element.style.height = '10px';
      element.style.backgroundColor = ['#ec4899', '#f43f5e', '#fbbf24'][Math.random() * 3 | 0];
      element.style.left = Math.random() * 100 + 'vw';
      element.style.top = '-10px';
      element.style.opacity = '1';
      element.style.pointerEvents = 'none';
      element.style.borderRadius = '50%';
      element.style.zIndex = '9999';
      document.body.appendChild(element);

      const duration = 2 + Math.random() * 1;
      const xMove = (Math.random() - 0.5) * 200;
      
      let startTime = Date.now();
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = elapsed / duration;
        
        if (progress < 1) {
          element.style.transform = `translateY(${progress * 100}vh) translateX(${xMove * progress}px)`;
          element.style.opacity = Math.max(0, 1 - progress);
          requestAnimationFrame(animate);
        } else {
          element.remove();
        }
      };
      animate();
    });
  }, []);

  return null;
}
