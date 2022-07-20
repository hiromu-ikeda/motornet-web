import styled from "styled-components";

export const Footer = () => {
    return (
        <>
            <Sfooter>
                <Title>カーライブラリ</Title>
                <CopyRight>CopyRight ©︎2022 YNot assoc. All Rights Reserved.</CopyRight>
            </Sfooter>
        </>
    );
}

const Sfooter = styled.footer`
    height: 72px;
    display: flex;
    justify-content: space-between;
    background-color: #FF3C3C;
`;

const Title = styled.div`
    font-size: 24px;
    color: #fff;
    margin: auto 0 auto 48px;
`;

const CopyRight = styled.div`
    font-size: 12px;
    color: #fff;
    margin: auto 48px auto 0;
`;
