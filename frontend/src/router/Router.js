import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Careers from '../pages/Careers';
import Cookies from '../pages/Cookies';
import Work from '../pages/Work';
import Capabilities from '../pages/Capabilities';
import Contact from '../pages/Contact';
import ContactThanks from '../components/ContactThanks';
import ContactOops from '../components/ContactOops';
import Privacy from '../pages/Privacy';
import Ambsan from '../components/case_study/Ambsan';
import BlackH2o from '../components/case_study/BlackH2o';
import FitnessApp from '../components/case_study/FitnessApp';
import Gohaych from '../components/case_study/Gohaych';
import Matcha from '../components/case_study/Matcha';
import Blog from '../pages/Blog';
import PostDetail from '../pages/PostDetail';
import Admin from '../components/admin/Admin';
import Admin2 from '../components/admin/Admin2';
import BlogCreate from '../components/admin/BlogCreate';
import BlogRead from '../components/admin/BlogRead';
import BlogUpdate from '../components/admin/BlogUpdate';
import ScheduleCall1 from '../components/ScheduleCall1';
import ScheduleCall2 from '../components/ScheduleCall2';
import ScheduleCall3 from '../components/ScheduleCall3';
import Landingpage from '../components/Landingpage';
import NoMatch from '../pages/NoMatch';
function Router(){
return(
    <Routes>
		<Route path='/' element={<Home />} />
		<Route path='/about' element={<About />} />
		<Route path='/careers' element={<Careers />} />
		<Route path='/cookies' element={<Cookies />} />
		<Route path='/work' element={<Work />} />
		<Route path='/capabilities' element={<Capabilities />} />
		<Route path='/contact' element={<Contact />} />
		<Route path='/contactthanks' element={<ContactThanks />} />
		<Route path='/contactoops' element={<ContactOops />} />
		<Route path='/privacy' element={<Privacy />} />
		<Route path='/ambsan' element={<Ambsan />} />
		<Route path='/blackh2o' element={<BlackH2o />} />
		<Route path='/fitnessapp' element={<FitnessApp />} />
		<Route path='/gohaych' element={<Gohaych />} />
		<Route path='/matcha' element={<Matcha />} />
		<Route path='/blog' element={<Blog />} />
		<Route path='/post-detail' element={<PostDetail />} />
		<Route path='/admin' element={<Admin />} />
		<Route path='/admin2' element={<Admin2 />} />
		<Route path='/blogcreate' element={<BlogCreate />} />
		<Route path='/blogread' element={<BlogRead />} />
		<Route path='/blogupdate' element={<BlogUpdate />} />
		<Route path='/schedulecall1' element={<ScheduleCall1 />} />
		<Route path='/schedulecall2' element={<ScheduleCall2 />} />
		<Route path='/schedulecall3' element={<ScheduleCall3 />} />
		<Route path='/landingpage' element={<Landingpage />} />
		<Route path='*' element={<NoMatch />} />
	</Routes>
	);
}
export default Router;