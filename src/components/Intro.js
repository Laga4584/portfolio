import React from "react";
import { useRef, useEffect } from 'react';
import ExpandMore from '@material-ui/icons/ExpandMore';
import useScrollNav from '../hooks/useScrollNav';

function Intro() {
	const detectScroll = useScrollNav('nav1');
	const sky = useRef();
	useEffect(() => {
		makeStars();
		window.addEventListener('resize', makeStars);
		return() => {
			window.removeEventListener('resize', makeStars);
		}
	}, []);

	const makeStars = () => {
		// 브라우저 가장 큰 크기
		const maxSize = Math.max(window.innerWidth, window.innerHeight);
	  
		// 랜덤한 X 위치 값
		const getRandomX = () => Math.random() * maxSize *1.5;
	  
		// 랜덤한 Y 위치 값
		const getRandomY = () => Math.random() * maxSize *1.5;
	  
		// 랜덤한 크기 (circle는 반지름이 크기)
		const randomRadius = () =>  Math.random() * 0.7 + 0.6;
		
		// 임의의 값
		const _size = Math.floor(maxSize / 2);
		
		const htmlDummy = new Array(_size).fill().map((_, i) => {
		  return  `<circle class='star'
			  cx=${getRandomX()}
			  cy=${getRandomY()}
			  r=${randomRadius()}
			  className="star" />`
		}).join('');
		//console.log(htmlDummy);
		
		sky.current.innerHTML = htmlDummy;
	  }
 
        return (
            <section className="sec_1 backSky"  id="scrollspyHeading1" {...detectScroll}>
				<svg className="sky" ref={sky}>
			</svg>
			
				<div className="container text_area">
					<div className="col-12 col-md-9 col-lg-6 py-5 m-auto">
						<h1 className="text-white">웹 개발자 <span className="point_color">김유진</span>의<br></br> 포트폴리오입니다</h1>
						<p className="text_color">매일 조금씩 나아지는 개발자가 되기 위해 노력하고 있습니다</p>
						<button className="btn btn-lg col-lg-2 col-3 btn_custom btn_shadow"><ExpandMore /></button>
					</div>
				</div>
			
		</section>
        )
    
}

export default Intro;