import styled from "styled-components";

export const HomeWrapper = styled.div`
  background: #e8e4e6;

  padding-top: 50px;
`;

export const Logo = styled.a`
  font-family: "Kaushan Script", cursive;
  font-size: 28px;

  @media screen and (max-width: 789px) {
    font-size: 22px;
  }

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;

export const HomeContent = styled.div`
  padding: 80px 0;

  @media screen and (max-width: 789px) {
    padding: 50px 0;
  }

  h1{
    color:#001E1D ;
  }
  p,
  a {
    font-size: 20px;
    line-height: 34px;
    color: #001e1d;
    margin-top: 40px;
    @media screen and (max-width: 789px) {
      font-size: 18px;
      line-height: 30px;
    }

    @media screen and (max-width: 500px) {
      font-size: 16px;
      line-height: 28px;
      margin-top: 20px;
    }

    @media screen and (max-width: 400px) {
      font-size: 14px;
      line-height: 26px;
    }
  }
`;

export const Footer1 = styled.div`
  background: #004643;
  
  h1{
    color: #FFFFFE;
  }

  p {
    width: 70%;
    color: #abd1c6;
    padding-bottom: 10px;

    @media screen and (max-width: 789px) {
      width: 90%;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  a {
    color: #abd1c6;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1.4px;
    border-bottom: 2px solid #abd1c6;
  }

  .logo-div {
    display: flex;

    a {
      border-bottom: none;
      margin-right: 30px;
    }
  }
`;
export const Footer2 = styled.div`
  background: #e8e4e6;

  padding: 20px 0;
  color: #001e1d;
  font-size: 14px;
`;
