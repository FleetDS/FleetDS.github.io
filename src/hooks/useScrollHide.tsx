import { useState, useEffect } from 'react';

export function useScrollHide() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const currentTime = Date.now();
      
      // Debounce scroll events
      if (currentTime - lastScrollTime < 100) {
        return;
      }
      
      // Adjust this threshold as needed
      const scrollThreshold = 50; 

      if (currentScrollTop > lastScrollTop && (currentScrollTop - lastScrollTop > scrollThreshold)) {
        // Scrolling down
        setShowHeader(false);
      } else if (currentScrollTop < lastScrollTop && (lastScrollTop - currentScrollTop > scrollThreshold)) {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollTop(currentScrollTop);
      setLastScrollTime(currentTime);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, lastScrollTime]);

  return showHeader;
}
