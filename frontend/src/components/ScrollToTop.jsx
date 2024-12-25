import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {

    document.body.scrollTo(0, 0);
    console.log(pathname)
  }, [pathname]);
}

export default ScrollToTop;
