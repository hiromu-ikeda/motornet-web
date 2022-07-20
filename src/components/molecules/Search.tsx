import styled from "styled-components"
import { SearchButton } from "../atoms/Buttons";

export const SearchBox = () => {
    return (
        <>
            <Sdiv className="searchBox">
                <Sinput className="searchInput" type="text" placeholder="車名を入力" />
                <SearchButton />
            </Sdiv>   
        </>
    )
}



const Sinput = styled.input`
    width: 320px;
    border: none;
    border-bottom: 1px solid #707070;
    height: 32px;
`;

const Sdiv = styled.div`
    text-align: center;
    margin-bottom: 56px;
`;
