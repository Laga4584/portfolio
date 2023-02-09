import { useRef, useCallback, useEffect } from 'react'

const useScrollFadeIn = (direction, duration, delay) => {
    const dom = useRef();
  
    const handleDirection = (name) => {
      switch (name) {
        case 'up':
          return 'translate3d(0, 50%, 0)';
        case 'down':
          return 'translate3d(0, -50%, 0)';
        case 'left':
          return 'translate3d(50%, 0, 0)';
        case 'right':
          return 'translate3d(-50%, 0, 0)';
        default:
          return;
      };
    };
  
    const handleScroll = useCallback(
      ([entry]) => {
        const { current } = dom;
        if (entry.isIntersecting) {
          current.style.transitionProperty = 'all';
          current.style.transitionDuration = `${duration}s`;
          current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
          current.style.transitionDelay = `${delay}s`;
          current.style.opacity = 1;
          current.style.transform = 'translate3d(0, 0, 0)';
        }else{
          if(window.innerWidth > 576){
            //console.log("out");
            current.style.transitionProperty = 'all';
            current.style.transitionDuration = `0s`;
            //current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
            current.style.transitionDelay = `0s`;
            current.style.opacity = 0;
            current.style.transform = handleDirection(direction);
          }
            
        };
      },
      [delay, duration, direction],
    );
  
    useEffect(() => {
      let observer;
      const { current } = dom;
  
      if (current) {
        observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
        observer.observe(current);
      }
  
      return () => observer && observer.disconnect();
    }, [handleScroll]);
  
    return {
      ref: dom,
      style: {
        opacity: 0,
        transform: handleDirection(direction),
      },
    };
  };
  
  export default useScrollFadeIn;