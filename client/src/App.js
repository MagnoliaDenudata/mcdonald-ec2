import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Test from './page/Test';
import Login from './page/Login/Login';
import Join from './page/Join/Join';
import Menu from './page/Menu/Menu';
import DetailProduct from './page/Menu/DetailProduct/DetailProduct';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Crew from './page/Story/People/Crew/Crew';
import Work from './page/Story/People/Work/Work';
import Recruit from './page/Story/People/Recruit/Recruit';
import Faq from './page/Story/Competition/Faq/Faq';
import BrandIntro from './page/Story/BrandIntro/BrandIntro';
import Find from './page/Store/Main/Find/Find';
import FarmToRestaurant from './page/Story/Competition/FarmToRestaurant/FarmToRestaurant';
import News from './page/WhatsNew/News/News.js';
import Promotion_HappyMeal from './page/WhatsNew/Promotion_HappyMeal/Promotion_HappyMeal.js';
import DetailPage from './page/WhatsNew/DetailPage/DetailPage.js';
import BrandHistory from './page/Story/BrandIntro/BrandHistory';
import Society from './page/Story/Society/Society';
import Slider from './components/Main/Slider'
import Scaleforgood from './page/Story/Society/Scaleforgood/Scaleforgood'
import Kidssoccer from './page/Story/Society/kidssoccer';
import Happyburger from './page/Story/Society/happyburger';
import Safetyguard from './page/Story/Society/safetyguard';
import Mcdonaldhouse from './page/Story/Society/mcdonaldhouse';
import McDrive from './page/Store/McDrive/McDrive';
import Rental from './page/Store/Rental/Rental';
import McDelivery from './page/Store/McDelivery/McDelivery';
import Storymain from './page/Story/Main/Main';
import Mcart from './page/Store/Mcart/Mcart';
import Buttonmain from "./components/Main/Button";
import Private from "./page/FooterLink/private";
import Location from "./page/FooterLink/location"
import Mypage from "./page/Mypage/Myinfo";
import Order from "./page/Mypage/Order";
import Event from './page/Store/Main/Event/Event'
import AdminMain from './Admin/Adminmain.js';
import Payment from './page/Payment/Payment.tsx';
import Success from './page/Payment/Success.js';
import Fail from './page/Payment/Fail.js';
import ALogin from './Admin/page/ALogin/ALogin.js';

function App() {
  const currentPath = window.location.pathname;

  return (
    <div className="App">
      {!currentPath.includes('/admin') && <Header />}
      {!currentPath.includes('/admin') &&  <Buttonmain />}
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/mypage' element={<Mypage />}></Route>
        <Route path='/mcart' element={<Mcart/>}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/story' element={<Storymain />}></Route>
        <Route path='/private' element={<Private />}></Route>
        <Route path='/location' element={<Location />}></Route>
        <Route path='/slider' element={<Slider />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/fail' element={<Fail />}></Route>
        <Route path='/payment/:order_id' element={<Payment />}></Route>
        <Route path='/admin/login' element={<ALogin />} />
        <Route path='/admin/*' element={<AdminMain />}></Route>
        <Route element={<Test/>}>
          <Route path='/story/society' element={<Society />} />
          <Route path='/story/mcdonaldhouse' element={<Mcdonaldhouse />}></Route>
          <Route path='/story/happyburger' element={<Happyburger />}></Route>
          <Route path='/story/safetyguard' element={<Safetyguard />}></Route>
          <Route path='/menu/:subcategory_id' element={<Menu />} />
          <Route path='/menu/:subcategory_id/:id' element={<DetailProduct />} />
          <Route path='/story/crew' element={<Crew />}></Route>
          <Route path='/story/work' element={<Work />}></Route>
          <Route path='/story/recruit' element={<Recruit />}></Route>
          <Route path='/story/faq' element={<Faq />}></Route>
          <Route path='/story/farmtorestaurant' element={<FarmToRestaurant />}></Route>
          <Route path='/story/brandintro' element={<BrandIntro />}></Route>
          <Route path='/story/brandhistory' element={<BrandHistory />}></Route>
          <Route path='/story/scaleforgood' element={<Scaleforgood />} />
          <Route path='/story/kidssoccer' element={<Kidssoccer />} /> 
          <Route path='/store/find' element={<Find />}></Route>
          <Route path='/store/event' element={<Event />}></Route>
          <Route path='/whats-new/13' element={<News />}></Route>
          <Route path='/whats-new/:subcategory_id' element={<Promotion_HappyMeal />}></Route>
          <Route path='/whats-new/:page/:prodNum' element={<DetailPage />}></Route>
          <Route path='/store/mcdrive' element={<McDrive />}></Route>
          <Route path='/store/rental' element={<Rental />}></Route>
          <Route path='/store/mcdelivery' element={<McDelivery />}></Route>
        </Route>
      </Routes>
      {!currentPath.includes('/admin') && <Footer />}
    </div>
  );
}
export default App;