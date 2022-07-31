import axios from "axios"
import styled from "styled-components";
import { ArticleCard } from "../components/molecules/ArticleCard";

export const Articles = () => {
  const GetArticles = async () => {
    const res = await axios.get('http://localhost:8000/api/articles');
    console.log(res);
  }
  return (
    
    <>
      <Sdiv>
        <ArticleCard />
      </Sdiv>
    </>
  )
}

const Sdiv = styled.div`
  margin: 32px 0;
`
