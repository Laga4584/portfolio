import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
    /*
  useEffect(()=>{
    window.addEventListener('scroll', getBannerPosition); // 스크롤시 getBannerPosition 발생
    
    return () =>   window.removeEventListener('scroll', getBannerPosition); // 클린업, 페이지를 나가면 이벤트 삭제
  },[position]) // position 값이 변할 때마다 effect 실행
  */
  /*
   //const scrollRef = useRef();
    const [scrollRef] = useHookWithRefCallback();
    var [isObserver, setObserver] = useState(null);
    var element;
    useEffect(() => {
      
        setObserver(scrollRef);
      }, [scrollRef]);
      
      //console.log(scrollRef.current);
      //element = scrollRef.current;
      
    //})

    //const {onMoveToElement} = useMoveScroll({element});
    const onMoveToElement = ()=> {
      console.log("here1");
      console.log(scrollRef.current);
      
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    //console.log(scrollRef);
    */
    return (
      <div className='App'>
        <Navbar></Navbar>
               
        <Intro></Intro>
        <Skills></Skills>
        <Projects></Projects>
        <About></About>
               
      </div>
    )
  
}

export default App;
