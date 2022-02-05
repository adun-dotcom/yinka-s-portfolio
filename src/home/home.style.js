import styled from "styled-components";

export const HomeWrapper = styled.div`
  background: #ECEDF2;

  padding-top: 50px ;
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

  @media screen and (max-width:789px){
  padding: 50px 0;

  }

  p,
  a {
    font-size: 20px;
    line-height: 34px;
        color:rgba(0, 0, 0, 0.8) ;
        margin-top:40px;
    @media screen and (max-width: 789px) {
      font-size: 18px;
      line-height: 30px;
    }

    @media screen and (max-width: 500px) {
      font-size: 16px;
      line-height: 28px;
      margin-top:20px;

    }

    @media screen and (max-width: 400px) {
      font-size: 14px;
      line-height: 26px;
    }
  }
`;

export const Footer1 = styled.div`
  background: rgba(18, 109, 113, 1);
  color: #ecedf2;

  p {
    width: 70%;
  color: #ecedf2;
  padding-bottom: 10px;

  @media screen and (max-width: 789px) {
    width:90%;
  }

  @media screen and (max-width: 500px) {
    width:100%;
  }

  }

  a {
    color: #ecedf2;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1.4px;
    border-bottom: 2px solid #ecedf2;
  }


  .logo-div{
      display:flex;

      a{
          border-bottom:none;
          margin-right:30px;
      }
  }
`;
export const Footer2 = styled.div`
  background: #e5e5e5;
  padding:20px 0;
  color: rgba(0,0,0,0.7);
  font-size:14px;
`;
