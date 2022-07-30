import axios from "axios"
import styled from "styled-components";
import { NoRadiusButton } from "../components/atoms/Buttons";
import { ArticleCard } from "../components/molecules/ArticleCard";

export const Articles = () => {
  const GetArticles = async () => {
    const res = await axios.get('http://localhost:8000/api/articles');
    console.log(res);
  }
  return (
    
    <>
      <Sdiv>
        <SswitchArticleButtons>
          <SNoRadiusButton text="最新の記事" href=""/>
          <SNoRadiusButton text="人気の記事" href=""/>
        </SswitchArticleButtons>
        <ArticleCard />
      </Sdiv>
    </>
  )
}

const Sdiv = styled.div`
  margin: 32px 0;
`
const SswitchArticleButtons = styled.div`
  text-align: center;
  margin-bottom: 32px;
`

const SNoRadiusButton = styled(NoRadiusButton)`
  margin: 0 13px;
`
