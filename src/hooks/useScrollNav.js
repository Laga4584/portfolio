import { useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {changePage, changeView} from "../modules/page"

const useScrollNav = (navId) => {
    const dom = useRef();
    const pageState = useSelector(state => state.page.pageState);
    const dispatch = useDispatch();
    /*
    const onMoveToElement = () => {
      dom.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    */
    const handleScroll = useCallback(
      ([entry]) => {        
        if (entry.isIntersecting) {
           dispatch(changeView(navId));
            //console.log('here');
            /*
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
            */
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
      console.log("here " + pageState);
      if (pageState==navId){
        
        console.log("here2 "+navId);
        
        dom.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        dispatch(changeView(navId));
        
      }
  
      if (current) {
        observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
        observer.observe(current);
      }
      
  
      return () => observer && observer.disconnect();
    }, [handleScroll, pageState]);
  
    return {
     ref: dom
    };
  };
  
  export default useScrollNav;