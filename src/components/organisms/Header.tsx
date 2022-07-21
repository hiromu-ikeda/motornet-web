import styled from "styled-components"

export const Header = () => {
  return (
    <Sheader>
      <Sh1>モーターネット</Sh1>
      <Snav>
        <Sul>
          <Sli>記事を投稿する</Sli>
          <Sli>ログイン</Sli>
        </Sul>
      </Snav>
    </Sheader>
  )
}

const Sheader = styled.header`
  background-color: #FF3C3C;
  display: flex;
  justify-content: space-between;
`;

const Sh1 = styled.h1`
  margin: 25px 0 25px 48px;
  font-size: 32px;
  color: #fff;
`;

const Snav = styled.nav`
  margin: 33px 48px 33px 0;
`
const Sul = styled.ul`
  display: flex;
`

const Sli = styled.li`
  color: #fff;
  margin-left: 24px;
`
