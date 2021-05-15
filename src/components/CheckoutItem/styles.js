import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const CheckoutImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const QuantityContainer = styled.span`
    width: 23%;
    display: flex;
`;

export const Arrow = styled.div`
    cursor: pointer;
    font-size: 27px;
`;

export const DisplayInfo = styled.span`
    width: ${props => props.value ? 'unset' : '23%'};
    margin: ${props => props.value ? 'auto 10px' : null };
`;

export const RemoveButton = styled.span`
    padding-left: 12px;
    cursor: pointer;
`;