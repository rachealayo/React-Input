import React from "react";
import styled from "styled-components";
import coco from "../Assets/cartoons/coco.jpg";
import cinderalla from "../Assets/cartoons/cinderalla.jpg";
import badboys from "../Assets/cartoons/bad boys.jpg";
import frozen from "../Assets/cartoons/frozen.jpg";
import soul from "../Assets/cartoons/soul.jpg";
import limitless from "../Assets/cartoons/limitless.jpg";
import america from "../Assets/cartoons/coming to america.jpg";
import incredibles from "../Assets/cartoons/incredibles.jpg";
import lion from "../Assets/cartoons/the lion king.jpg";
import titanic from "../Assets/cartoons/titanic.jpg";
import simpsons from "../Assets/cartoons/the simpsons.jpg";
import hulk from "../Assets/cartoons/hulk.jpg";
import osuofia from "../Assets/cartoons/osuofia.jpg";
import bling  from "../Assets/cartoons/bling lagosians.jpg";
import cinderalla2  from "../Assets/cartoons/cinderalla2.jpg";
import moana  from "../Assets/cartoons/moana.jpg";
import frozen2  from "../Assets/cartoons/frozen2.jpg";
import superwoman  from "../Assets/cartoons/superwoman.jpg";
import tangled  from "../Assets/cartoons/tangled.jpg";
import wedding  from "../Assets/cartoons/the wedding party.jpg";

const Recommend = () => {
    return (
        <Container>
            <Wrap>
             <Text>
                 Recommended for you  
             </Text>
              <Cardwrap>
                   <Cards>
                       <Card src={coco} alt="img1"/>
                       <Card src={cinderalla} alt="img2"/>
                       <Card src={badboys} alt="img3"/>
                       <Card src={frozen} alt="img4"/>
                        
                       <Card src={soul} alt="img5"/>
                       <Card src={limitless} alt="img6"/>
                       <Card src={america} alt="img7"/>
                       <Card src={incredibles} alt="img8"/>

                       <Card src={lion} alt="img9"/>
                       <Card src={titanic} alt="img10"/>
                       <Card src={simpsons} alt="img11"/>
                       <Card src={hulk} alt="img12"/>

                       <Card src={osuofia} alt="img13"/>
                       <Card src={bling} alt="img14"/>
                       <Card src={cinderalla2} alt="img15"/>
                       <Card src={moana} alt="img16"/>

                       <Card src={frozen2} alt="img17"/>
                       <Card src={superwoman} alt="img18"/>
                       <Card src={tangled} alt="img19"/>
                       <Card src={wedding} alt="img20"/>

                      
                    </Cards>
                 
              </Cardwrap>
            </Wrap>
           
    
        </Container>
    )
}

export default Recommend;

const Container = styled.div`
height: auto;
width: 100%;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrap = styled.div`
height: 100%;
width: 100%;
// background-color: red;
`;

const Text = styled.div`
background-color: black;
height: 5%;
width: 100%;
color: white;
font-size: 25px;
font-style: initial;
font-weight: bold;
margin-bottom: 10px; 
`;

const Cardwrap = styled.div`
height: auto;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
color: red;
// background-color: green;
`;

const Cards = styled.div`
width: 90%;
margin-bottom: 10px;
display: flex;
align-items: center;
color: red;
// background-color: red;
flex-wrap: wrap;
justify-content: center;
`;

const Card = styled.img`
height: 200px;
width: 200px;
display: flex;
justify-content: center;
align-items: center;
color: red;
background-color: cyan;
border-radius: 0.5rem;
margin: 10px;
z-index: 500;

// img{
//     width: 100%;
//     height: 100%;
// }

@media screen and (max-width: 768px){
    height: 200px;
    width: 100%;
    background-color: salmon;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
 }

:hover{
    background-color: plum;
    border: 1px solid black;
    transition: all ease-in-out 400ms;
    cursor: pointer;
    transform: scale(1.04);
}
`;