import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SkillIcon from '@material-ui/icons/Create';
import ProjectIcon from '@material-ui/icons/Assignment';
import AboutIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../modules/page";

function Navbar() {
	var viewState = useSelector(state => state.page.viewState);
	//var pageState = useSelector(state => state.page.pageState);

	  const dispatch = useDispatch();
	  const OnClick = (navId, e) => {
		e.preventDefault();
		console.log(navId);
		dispatch(changePage(navId));
	  }
	 
        return (
            <div className="container-fluid navigation_bar">
			<nav className="navscroll navbar fixed-top navbar-expand-lg navbar-light py-2 px-3"  id="navbar-example2" >
				<div className="container">
                <div className="navbar-brand point_color">Portfolio</div>
				  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="text-white"><MenuIcon style={{ fontSize: 35 }} /></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav ms-auto nav nav-pills">
				      <li className="nav-item my-1 align-start me-4">
					  <a className={ viewState=='nav1' ? 'point_color' : 'normal_color' } onClick={(e) => OnClick('nav1', e)} href="#" id="nav1"><span className="d-lg-none d-xl-none me-3"><HomeIcon /></span>Home</a>
				      </li>
				      <li className="nav-item my-1 me-4">
					  <a className={ viewState=='nav2' ? 'point_color' : 'normal_color' } onClick={(e) => OnClick('nav2',e)} href="#" id="nav2"><span className="d-lg-none d-xl-none me-3"><SkillIcon /></span>Skills</a>
				      </li>
				      <li className="nav-item my-1 me-4">
					  <a className={ viewState=='nav3' ? 'point_color' : 'normal_color' }  onClick={(e) => OnClick('nav3',e)} href="#" id="nav3"><span className="d-lg-none d-xl-none me-3"><ProjectIcon /></span>Projects</a>
				      </li>
				      <li className="nav-item my-1 me-4">
					  <a className={ viewState=='nav4' ? 'point_color' : 'normal_color' }  onClick={(e) => OnClick('nav4',e)} href="#" id="nav4"><span className="d-lg-none d-xl-none me-3"><AboutIcon /></span>About</a>
				      </li>					 
				    </ul>
				  </div>
				</div>
			</nav>
		</div>
        )
    
}

export default Navbar;