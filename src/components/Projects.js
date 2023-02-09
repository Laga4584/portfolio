import React, {useState} from "react";
import image1 from "../images/projects/pj_portfolio.png";
import image2 from "../images/projects/onmyoji.png";
import image3 from "../images/projects/writer.png";
import image4 from "../images/projects/ssma.png";
import image5 from "../images/projects/series.png";
import icon1 from "../images/projects/github.png";
import icon2 from "../images/projects/pagelink.png";
import useScrollNav from '../hooks/useScrollNav';
import projectData from "../data/projectData";

function Projects() {
	const detectScroll = useScrollNav('nav3');
	const imageList = [image2, image3, image4, image5];
	/*
	let [title, setTitle] = useState([
		'[React] React 설치와 개발환경 셋팅하기',
		'[React] JSX 를 이용해 HTML 페이지 제작해보기',
		'[React] React 에서 state 변경해보기'	
    ]);
	*/

        return (
            <section className="sec" id="scrollspyHeading3" {...detectScroll}> 
			<div className="container mx-auto py-5 h-100">
				<div className="h-10 text-center">
					<p className="display-6 mb-1 point_color">Projects</p>
				</div>
				
				<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" className=""></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" className=""></button>
					</div>
					<div className="carousel-inner carousel_size">
					<div className="carousel-item active h-75 " >
						<div className="row d-flex align-items-center justify-content-evenly mt-0 px-10">
								<div className="col-10 col-md-5 text-center">
									<div className="box_border position-relative card_bg rounded p-3">
										<p className="mb-2 mt-2">Portfolio</p>
										<img className="img-fluid" alt="language"  src={image1} />
									</div>
								</div>
								
								<div className="col-10 col-md-5 text-center">
									<div className="position-relative p-3">
										<p className="mb-2 mt-4 normal_color">개인 포트폴리오 웹사이트</p>
										<p className="text_color">React와 Bootstrap을 이용해 모바일과 PC에서 볼 수 있도록 반응형을 고려하여 작업하였습니다.</p>
										<div className="d-flex justify-content-evenly">
										<a href=""><img className="img-fluid" alt="github"  src={icon1} width="60px" /></a>
										<a href=""><img className="img-fluid" alt="pagelink"  src={icon2} width="40px"/></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						
        
						{
            				projectData.map(function(content, index){
              					return (
									<div className="carousel-item h-75 " key={index}>
						<div className="row d-flex align-items-center justify-content-evenly mt-0 px-10">
								<div className="col-10 col-md-5 text-center">
									<div className="box_border position-relative card_bg rounded p-3">
										<p className="mb-2 mt-2">{content.title}</p>
										<img className="img-fluid" alt="language"  src={imageList[index]} />
									</div>
								</div>
								
								<div className="col-10 col-md-5 text-center">
									<div className="position-relative p-3">
										<p className="mb-2 mt-4 normal_color">{content.subtitle}</p>
										<p className="text_color">{content.description}</p>
										<div className="d-flex justify-content-evenly">
										<a href=""><img className="img-fluid" alt="github"  src={icon1} width="60px" /></a>
										<a href=""><img className="img-fluid" alt="pagelink"  src={icon2} width="40px"/></a>
										</div>
									</div>
								</div>
							</div>
						</div>
								)
								})
							}
              
					</div>
					<button className="carousel-control-prev button_size h-75" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next button_size  h-75" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</section>
        )
    
}

export default Projects;