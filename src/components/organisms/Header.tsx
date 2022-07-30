import { Link } from "react-router-dom";
import styled from "styled-components"

export const Header = () => {
  return (
    <Sheader>
      <StoTop to="/">モーターネット</StoTop>
      <Snav>
        <Sul>
          <li><StoArticlesNew to="/articles/new">記事を投稿する</StoArticlesNew></li>
          <li><StoSignup to="/signup">登録する</StoSignup></li>
        </Sul>
      </Snav>
    </Sheader>
  )
}

const Sheader = styled.header`
  background-color: #FF3C3C;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const StoTop = styled(Link)`
  margin: 25px 0 25px 48px;
  font-size: 32px;
  color: #fff;
  text-decoration: none;
`

const Snav = styled.nav`
  margin: 33px 48px 33px 0;
`
const Sul = styled.ul`
  display: flex;
`

const StoSignup = styled(Link)`
  color: #fff;
  margin-left: 24px;
  text-decoration: none;
`

const StoArticlesNew = styled(Link)`
  color: #fff;
  text-decoration: none;
`
