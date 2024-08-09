import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Wrap in requestAnimationFrame to ensure execution after DOM update
    requestAnimationFrame(scrollToTop);
  }, [location]);
};

export default useScrollToTop;
