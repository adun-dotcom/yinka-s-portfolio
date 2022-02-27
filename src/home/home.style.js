import styled from "styled-components";

export const HomeWrapper = styled.div`
  background: #e8e4e6;
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
  padding: 100px 0;

  .flexed-intro{
    display:flex;
    align-items: center;

    img{
      margin-right:50px;

      @media screen and (max-width:600px){
        width:200px;
        height:auto;
        margin-right:20px;
      }

      @media screen and (max-width:500px){
        width:170px;
        margin-right:20px;
      }
      @media screen and (max-width:370px){
        width:150px;
        margin-right:20px;
      }
      @media screen and (max-width:340px){
        width:140px;
        margin-right:20px;
      }
    }

    
  }

  @media screen and (max-width: 789px) {
    padding: 50px 0;
  }

  .h1-web{
    display:block;

    @media screen and (max-width:700px){
      display:none;
    }
  }

  .h1-mobile{
    display:none;

    @media screen and (max-width:700px){
      display:block;
    }
  }

  h1{
    color:#001E1D ;
    @media screen and (max-width:910px){
      font-size:30px;
    }
      @media screen and (max-width:500px){
        font-size:28px;
      }
      @media screen and (max-width:450px){
        font-size:24px;
    }
    @media screen and (max-width:340px){
      font-size:20px;

    }
  }

  p,
  a {
    font-size: 20px;
    line-height: 34px;
    color: #001e1d;
    margin-top: 30px;
    text-decoration: none;
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
  }

  .mobile.logo-div {
    display:none;

    @media screen and (max-width:700px){
    display: flex;

    }
  }

  .web.logo-div {
    display:flex;

    @media screen and (max-width:700px){
    display: none;

    }
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
