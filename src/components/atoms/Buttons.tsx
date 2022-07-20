import styled from "styled-components";

type Buttontype = {
    text: string;
}

export const SearchButton = () => {
    return (
        <>
            <Ssearchbutton>検索</Ssearchbutton> 
        </>
    )
}

export const Button = (props: Buttontype) => {
    return (
        <>
            <Sbutton>{props.text}</Sbutton>
        </>
    )
}

const Ssearchbutton = styled.button`
    width: 64px;
    height: 32px;
    border: none;
    background-color: #FF3C3C;
    color: #fff;
    border-radius: 10px;
`;

const Sbutton = styled.button`
    border: none;
    padding: 10px 50px;
    color: #fff;
    background-color: #FF3C3C;
    border-radius: 999px;
    font-size: 20px;
    display: block;
    margin: 0 auto 30px auto;
`
