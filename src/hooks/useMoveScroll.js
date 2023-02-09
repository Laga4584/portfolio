import { useRef } from 'react';

function useMoveScroll({element}) {
    //console.log(scrollRef);
    //const element = useRef();
    /*
    useEffect(() => {
        // ref는 항상 존재여부를 검사하고 사용해야 한다(단축평가 Good!)
        inputRef.current && inputRef.current.focus();
      });
      */
    const onMoveToElement = () => {
        console.log("here");
      //element.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return {onMoveToElement};
  }
  
  export default useMoveScroll;