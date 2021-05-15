import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 330px;
    height: 480px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    button {
        margin-top: auto;
    }
`;

export const CartItems = styled.div`
    display: flex;
    height: 88%;
    flex-direction: column;
    overflow-y: auto;
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`