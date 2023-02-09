import useScrollFadeIn from '../hooks/useScrollFadeIn';
import useScrollNav from '../hooks/useScrollNav';
import image1 from "../images/skills/language.png";
import image2 from "../images/skills/frontend.png";
import image3 from "../images/skills/backend.png";
import image4 from "../images/skills/database.png";
import image5 from "../images/skills/deployment.png";
import image6 from "../images/skills/library.png";

function Skills() {
    
		const fadeInBottom1 = useScrollFadeIn('up', 1, 0);
		const fadeInBottom2 = useScrollFadeIn('up', 1, 0.2);
		const fadeInBottom3 = useScrollFadeIn('up', 1, 0.4);
		const fadeInBottom4 = useScrollFadeIn('up', 1, 0.6);
		const fadeInBottom5 = useScrollFadeIn('up', 1, 0.8);
		const fadeInBottom6 = useScrollFadeIn('up', 1, 1.0);
		const detectScroll = useScrollNav('nav2');
        return (
            <section className="sec"  id="scrollspyHeading2" {...detectScroll}> 
			<div className="container mx-auto py-5">
				<div className="mb-4 text-center">
					<p className="display-6 mb-1 point_color">Skills</p>
				</div>
                
				<div className="row d-flex align-items-center justify-content-evenly mt-0">
			
					<div className="col-xs-12 col-sm-4 col-lg-3 text-center skill" {...fadeInBottom1}>
						<div className="box_border position-relative card_bg rounded p-3">
							<p className="mb-2 mt-2">Language</p>
							<img className="img-fluid" alt="language"  src={image1} />
						</div>
					</div>
					
					<div className="col-xs-12 col-sm-4 col-lg-3 text-center skill" {...fadeInBottom2}>
						<div className="box_border position-relative card_bg rounded p-3">
							<p className="mb-2 mt-4">Frontend</p>
							<img className="img-fluid" alt="language"  src={image2} />
						</div>
					</div>
                   
					<div className="col-xs-12 col-sm-4 col-lg-3 text-center skill" {...fadeInBottom3}>
						<div className="box_border position-relative card_bg rounded p-3">
							<p className="mb-2 mt-4">Backend</p>
							<img className="img-fluid" alt="language"  src={image3} />
						</div>
					</div>
					</div>

					<div className="row d-flex align-items-center justify-content-evenly mt-0">
					<div className="col-xs-12 col-sm-4 col-lg-3 text-center skill" {...fadeInBottom4}>
						<div className="box_border position-relative card_bg rounded p-3">
							<p className="mb-2 mt-4">Database</p>
							<img className="img-fluid" alt="language"  src={image4} />
						</div>
					</div>

					<div className="col-xs-12 col-sm-4 col-lg-3 text-center skill" {...fadeInBottom5}>
						<div className="box_border position-relative card_bg rounded p-3">
							<p className="mb-2 mt-4">Deployment</p>
							<img className="img-fluid" alt="language"  src={image5} />
						</div>
					</div>

					<div className="col-xs-12 col-sm-4 col-lg-3 text-center skill" {...fadeInBottom6}>
						<div className="box_border position-relative card_bg rounded p-3">
							<p className="mb-2 mt-4">Library</p>
							<img className="img-fluid" alt="language"  src={image6} />
						</div>
					</div>
                    
				</div>
				
			</div>
		</section>
        )
    
}

export default Skills;