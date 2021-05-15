import styled, { css } from 'styled-components';

const NameProps = css`
  width: 90%;
  margin-bottom: 15px;
`;

const PriceProps = css`
  width: 10%;
`;


export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 375px;
  align-items: center;
  position: relative;

  
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 275px;
    display: none;
  }

  &:hover {
    div {
      opacity: 0.7;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  
`;

export const CollectionImage = styled.div`
  background-image: url(${ props => props.imageUrl });
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;    
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const FooterInfo = styled.span`
  ${props => props.price ? PriceProps : NameProps} 
`;