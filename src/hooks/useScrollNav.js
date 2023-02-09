import { useRef, useCallback, useEffect } from 'react'

const useScrollNav = (navId) => {
    const dom = useRef();
  
    const handleScroll = useCallback(
      ([entry]) => {
        //const { current } = dom;
        const target = window.document.getElementById(navId);
        const nav1 = window.document.getElementById('nav1');
        const nav2 = window.document.getElementById('nav2');
        const nav3 = window.document.getElementById('nav3');
        const nav4 = window.document.getElementById('nav4');
        if (entry.isIntersecting) {
            //console.log('here');
            nav1.classList.remove("point_color");
            nav1.classList.add("normal_color");
            nav2.classList.remove("point_color");
            nav2.classList.add("normal_color");
            nav3.classList.remove("point_color");
            nav3.classList.add("normal_color");
            nav4.classList.remove("point_color");
            nav4.classList.add("normal_color");
            target.classList.remove("normal_color");
            target.classList.add("point_color");
            //target.classList.add("active");
              //console.log(target);
        }else{
            //nav1.classList.remove("point_color");
            //nav2.classList.remove("point_color");
            //nav3.classList.remove("point_color");
            //nav4.classList.remove("point_color");
            //target.classList.add("normal_color");
            //target.classList.remove('active');
        };
      },
      [navId],
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
      
    };
  };
  
  export default useScrollNav;