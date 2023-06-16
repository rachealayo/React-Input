import React from "react";
// import styled from "styled-components";

const Card = ({idd, namee, coursee, Sectionn}) => {
  return(
   <card>
     <Wrap>
        <Line1>{idd}</Line1>
        <Line2>{namee}</Line2>
        <Line3>{coursee}</Line3>
        <Line4>{Sectionn}</Line4>
    
     </Wrap>    
   </card>
  )
};

export default Card;

// const Container = styled.div`
//   height: 200px;
//   width: 300px;
//   background-color: aliceblue;
//   display: flex;
//   justify-content: center;
//   // align-items: center;
//   border-radius: 1rem;
//   margin: 10px;
// `;

// const Wrap = styled.div`
//   height: auto;
//   width: auto;
//   // background-color: whitesmoke;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Line1 = styled.div`
//   font-weight: bold;
//   font-size: 20px;
//   color: red;
// `;

// const Line2 = styled.div`
//   font-weight: bold;
//   font-size: 20px;
//   color: grey;
// `;

// const Line3 = styled.div`
//   font-weight: bold;
//   font-size: 20px;
//   margin-bottom: 30px;
//   color: teal;
// `;

// const Line4 = styled.div`
//   font-weight: bold;
//   font-size: 20px;
//   color: teal;
// `;
