import React from "react";
import { styled } from "styled-components";
import Loader from "./Loader";

/***********************Styles*************************/
//variables
const textColor = "hsl(0, 0%, 59%)";
//variables

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  background-color: white;
  width: 57%;
  border-radius: 1rem;
  z-index: 1000;

  @media (max-width: 880px) {
    flex-wrap: wrap;
    text-align: center;
    top: 18%;
    padding: 0;
  }

  @media (max-width: 400px) {
    top: 25%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${textColor};
  padding-right: 6rem;
  padding-left: 2rem;

  &:last-child {
    border: none;
  }

  @media (max-width: 1330px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  @media (max-width: 880px) {
    width: 100%;
    border-style: none;
  }
`;

const P = styled.p`
  color: ${textColor};
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: -0.5rem;

  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
`;

/***********************Component*************************/

const OutputSection = ({ data, isLoading }) => {
  const { ip, region, city, postalCode, timezone, isp } = data;
  return (
    <Section>
      <Div>
        <P>Ip Address</P>
        {isLoading ? <Loader /> : <p>{ip}</p>}
      </Div>
      <Div>
        <P>Location</P>
        {isLoading ? (
          <Loader />
        ) : (
          <p>{`${region}, ${city}, ${postalCode}`}</p>
        )}
      </Div>
      <Div>
        <P>Timezone</P>
        {isLoading ? <Loader /> : <p>{`UTC ${timezone}`}</p>}
      </Div>
      <Div>
        <P>ISP</P>
        {isLoading ? <Loader /> : <p>{isp}</p>}
      </Div>
    </Section>
  );
};

export default OutputSection;
