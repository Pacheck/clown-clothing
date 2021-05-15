import styled from 'styled-components';

export const SignUpContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
`;

export const Text = styled.span`
    margin: ${({ title }) => title ? '10px 0' : null };
`;

export const CustomForm = styled.form``;