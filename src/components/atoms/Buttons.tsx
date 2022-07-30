import { Link } from "react-router-dom";
import styled from "styled-components";

type SearchButtonType = {
    href: string;
}

type ButtonType = {
    text: string;
    href: string;
}

export const SearchButton = (props: SearchButtonType) => {
    return (
        <Ssearchbutton to={props.href}>検索</Ssearchbutton> 
    )
}

export const Button = (props: ButtonType) => {
    return (
        <Sbutton to={props.href}>{props.text}</Sbutton>
    )
}

export const NoRadiusButton = (props: ButtonType) => {
    return (
        <Sbutton to={props.href}>{props.text}</Sbutton>
    )
}

const Ssearchbutton = styled(Link)`
    border: none;
    background-color: #FF3C3C;
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
`;

const Sbutton = styled(Link)`
    border: none;
    padding: 10px 50px;
    color: #fff;
    background-color: #FF3C3C;
    border-radius: 999px;
    font-size: 20px;
    display: block;
    margin: 0 auto 30px auto;
    text-decoration: none;
    display: inline-block;
`
