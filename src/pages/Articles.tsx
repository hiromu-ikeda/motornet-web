import axios from "axios"
import { useEffect, useState } from "react";

export const Articles = () => {
  const GetArticles = async () => {
    const res = await axios.get('http://localhost:8000/api/articles');
    console.log(res);
  }
  return (
    
    <>
      <div>記事を表示します</div>
      <button onClick={GetArticles}>APIを叩きます</button>
    </>
  )
}
