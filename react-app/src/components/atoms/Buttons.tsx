import styled from "styled-components";

export const SearchButton = () => {
    return (
        <>
            <Sbutton>検索</Sbutton> 
        </>
    )
}

const Sbutton = styled.button`
    width: 64px;
    height: 32px;
    border: none;
    background-color: #FF3C3C;
    color: #fff;
    border-radius: 10px;
`;
