import { useRef } from 'react';
import useScrollNav from '../hooks/useScrollNav';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

function About() {
	const detectScroll = useScrollNav('nav4');
        const fadeInBottom1 = useScrollFadeIn('up', 1, 0);
        const fadeInBottom2 = useScrollFadeIn('up', 1, 0.2);
		const fadeInBottom3 = useScrollFadeIn('up', 1, 0.4);
		const fadeInBottom4 = useScrollFadeIn('up', 1, 0.6);
        return (
            <section className="sec"  id="scrollspyHeading4"  {...detectScroll}> 
			<div className="container mx-auto py-5">
				<div className="mb-4 text-center">
					<p className="display-6 mb-1 point_color">About</p>
				</div>
                
				<div className="row d-flex align-items-center justify-content-evenly mt-0">
			
					<div className="col-12 text-center" {...fadeInBottom1}>
							<p className="mb-5 mt-2 text_color">
                                안녕하세요. 웹 개발자 김유진입니다.
                                새로운 것을 익히기를 두려워하지 않고 끊임없이 도전하는 개발자가 되고자 합니다.
                            </p>
					</div>
				<div className="row d-flex align-items-center justify-content-evenly mt-0">
					<div className="col-12 col-md-4 text-center mb-5" {...fadeInBottom2}>
						<div className="box_border position-relative card_bg rounded p-3">
							<p className="mb-2 mt-4">Github</p>
							<p className="">https://github.com/Laga4584</p>
						</div>
					</div>
                   
					<div className="col-12 col-md-4 text-center mb-5" {...fadeInBottom3}>
						<div className="box_border position-relative card_bg rounded p-3">
							<p className="mb-2 mt-4">Contact</p>
							<p className="">karhell4@naver.com</p>
						</div>
					</div>
					<div className="col-12 col-md-4 text-center mb-5" {...fadeInBottom4}>
						<div className="box_border position-relative card_bg rounded p-3">
							<p className="mb-2 mt-4">Education</p>
							<p className="">연세대학교 컴퓨터과학과</p>
						</div>
					</div>
                </div>
                    
				</div>
				
			</div>
		</section>
        )
}

export default About;