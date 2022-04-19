import Image1 from './Images/download.jpg';
import Image2 from './Images/elantra.jpg';
import Image3 from './Images/palisade-lx2-highlights-kv-pc.jpg';
import Image4 from './Images/tucson.jpg';
import Image5 from './Images/hyundai-story.jpg';
import Logo from './Images/speed-car-logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import { useNavigate } from 'react-router-dom';

const HomePage = () =>{

  const navigate = useNavigate();

  const UserLogin = (e) => {
      e.preventDefault();
      navigate('/UserLoginComponent');
  }
  const UserRegister = (e) => {
    e.preventDefault();
    navigate('/UserRegister');
}

  const OwnerLogin = (e) => {
    e.preventDefault();
    navigate('/OwnerLogin');
  }

  const OwnerRegister = (e) => {
    e.preventDefault();
    navigate('/OwnerRegister');
}

  const AdminLogin = (e) =>{
    e.preventDefault();
    navigate('/AdminLogin');
  }

  return(
      <body className=" mt-0 pt-0 m-blank p-auto" style={{backgroundColor: '#1A374D'}}>
        <br/><br/><br/>
    <div className="container py-3 pt-3 pb-2 mx-auto" >
    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top text-white h3 display-7" style={{ backgroundColor: 'black'}}>
        &nbsp;&nbsp;
                        <img

                            class="d-block w-10 h-3"
                            src={Logo}
                            alt="Image Two"
                        />&nbsp;&nbsp; <span>Vehicle Rental System </span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </header>
    
    <div className='bg-primary'>
      <main>
    
      <div style={{ display: 'block', width: 1100, padding: 10 }} className="mt-0">
      <Carousel style={{ alignItems:'center'}}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100" src={Image1}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3 id='userLogin1'>Find your perfect and comfortable ride</h3>
            <p  ><b/>With our years of experience we are exactly what you are looking for. Classy rides that meets your taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100" src={Image2}
            alt="Image Two"
          />
          <Carousel.Caption>
          <h3 id='userLogin1'>Find your perfect and comfortable ride</h3>
            <p>With our years of experience we are exactly what you are looking for. Classy rides that meets your taste.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100" src={Image3}
            
            alt="Image Two"
          />
          <Carousel.Caption>
          <h3 id='userLogin1'>Find your perfect and comfortable ride</h3>
            <p>With our years of experience we are exactly what you are looking for. Classy rides that meets your taste.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100" src={Image4}
            alt="Image Two"
          />
          <Carousel.Caption>
          <h3  id='userLogin1'><b>Find your perfect and comfortable ride</b></h3>
            <p style={{ textAlign:"left" }} >With our years of experience we are exactly what you are looking for. Classy rides that meets your taste.</p>          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100" src={Image5}
            alt="Image Two"
          />
          <Carousel.Caption>
          <h3 id='userLogin1'> Find your perfect and comfortable ride</h3>
            <p>With our years of experience we are exactly what you are looking for. Classy rides that meets your taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>


      <div className="row row-cols-1 row-cols-md-3 mb-0 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-1 text-white bg-primary border-primary">
                  <h4 className="my-0 fw-normal">User</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Rent<small className="text-muted fw-light"> vehicle</small></h1>
                  
                  <button onClick={(e) => UserLogin(e)} type="button" className="w-50 btn btn-outline-primary ">Login</button>
                  <button onClick={(e) => UserRegister(e)} type="button" className="w-50 btn btn-outline-primary ">Register</button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-1 text-white bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Owner</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Rent<small className="text-muted fw-light"> your vehicles</small></h1>
                  
                  <button onClick={(e) => OwnerLogin(e)} type="button" className="w-50 btn btn-outline-primary ">Login</button>
                  <button onClick={(e) => OwnerRegister(e)} type="button" className="w-50 btn btn-outline-primary ">Register</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-1 text-white bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Admin</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Admin <small className="text-muted fw-light">use</small></h1>
                  
                  <button onClick={(e) => AdminLogin(e)} type="button" className="w-50 btn btn-outline-primary ">Login</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <br/><br/><br/>
  </body>
      );
}

export default HomePage;