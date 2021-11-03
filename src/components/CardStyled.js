import styled from 'styled-components';

const CardStyled = styled.div`
  position: relative;
  width: 500px;
  height: 650px;
  left: 470px;
  top: 100px;
  margin-bottom: 300px;
  background: #e5dccd;
  box-shadow: -4px 4px 2px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
`;

const title = styled.h1`
  position: absolute;
  width: 330px;
  height: 114px;
  margin: 20px 30px 20px;
  bottom: 20px;
  font-family: Rosarivo;
  font-style: normal;
  font-weight: normal;
  font-size: 46px;
  line-height: 65px;
  color: #000000;
`;

/* const date = styled.span`
  position: relative;
  display: inline-flex;
  margin-left: 33px;
  gap: 300px;
`; */

export default CardStyled;
