import React, {useState} from "react";
import "../../App.css"
import {FaBars, FaTimes} from "react-icons/fa"


const Header = () => {

    const [click, setClick] = useState(false)
// Function for Toggle
     const handClick = () =>{
        setClick(!click)
     }

     return(
        <div className="header">
            <div className="Wrapper">
                <div className="logo">LOGO</div>
               <div className="navWrap" click={click}>
                   <span>HOME</span>
                   <span>ABOUT</span>
                   <span>SERVICE</span>
                   <span>CONTACT</span>
                </div>
                <div className="BurgerHold" onClick={handClick}>
                  { click ? <FaTimes/> : <FaBars/>}
                </div>
            </div>
               {click?  <div className="burgernav" click={click}>
                   <span>HOME</span>
                   <span>ABOUT</span>
                   <span>SERVICE</span>
                   <span>CONTACT</span>
                </div> : null}
        </div>
    )

    }
  
export default Header;

// const NavWrap = styled.div`
//    height: 100%;
//    width:60%;
//    /* background-color: goldenrod; */
//    display: flex;
//    justify-content: space-between;
//    align-items: center;

//    @media screen and (max-width: 768px){
//       flex-direction: column;
//       width: 100%;
//       position: absolute;
//       background-color: transparent;
//       height: 50vh;
//       transition:all ease 1s;
//       justify-content: space-evenly;
//       left: ${({toggle}) => (toggle? 0 : "-100%")};
//       margin-top: 350px;
//       z-index: 500;
//       transform: scale(1.02);
//    }
// `;
