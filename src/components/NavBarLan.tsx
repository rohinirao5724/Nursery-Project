import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavBarLan() {
  const lanBar= useNavigate();
  const goToLandPage = (e:FormDataEvent)=>{
    e.preventDefault();
    console.log("from login...");
    lanBar('/LandingPage');
      }

  return (
    <div>
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/tvs">
                  popular plants
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/wash">
                 categories
                </a>
              </li>
              
            </ul>
          </div>
        </div>
    
   
  )
}