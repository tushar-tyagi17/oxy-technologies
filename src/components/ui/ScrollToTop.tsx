import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-accent-green hover:to-accent-electric text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent-green focus:ring-opacity-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative flex items-center justify-center">
            <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <div className="absolute inset-0 rounded-full bg-white opacity-20 group-hover:animate-ping"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;