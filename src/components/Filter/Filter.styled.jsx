import styled from "styled-components";

export const Label = styled.label`
        display: block;
        font-size: ${p => p.theme.fontSizes.m}px;
        color: #14331B;
        margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Input = styled.input.attrs({
    type: 'text',
})`
    width: 200px;
    padding: ${p => p.theme.space[2]}px;
    margin-left: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.xs}px;
    background: ${p => p.theme.colors.primary};
    outline: none;
    border: 2px solid #14331B;
    border-radius: 5px;
`;