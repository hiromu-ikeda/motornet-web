import styled from "styled-components"
import { HotTopics } from "../molecules/HotTopics"

export const Sidebar = () => {
    return (
        <>
            <Saside>
                <HotTopics />
            </Saside>
        </>
    )
}

const Saside = styled.aside`
    background-color: #fff;
    margin-top: 32px;
    margin-bottom: 32px;
    grid-column: 2;
`


