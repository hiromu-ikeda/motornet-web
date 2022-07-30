import axios from "axios"
import { Article } from "../components/molecules/Article";

export const Articles = () => {
  const GetArticles = async () => {
    const res = await axios.get('http://localhost:8000/api/articles');
    console.log(res);
  }
  return (
    
    <>
      <div>
        <Article />
      </div>
    </>
  )
}
