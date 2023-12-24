import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../news.module.css";
import NewsCard from "./news-card";

const OtherNews = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${id}&apiKey=3ec191c2ce5f420c955281392e732a13`);
        const result = await response.json();
        setData(result.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  },[id]);

  return (
    <div className={style.news}>
     
      {data.map((article, index) => (
        <NewsCard
          key={index}
          image={article.urlToImage}
          title={article.title}
          description={article.description}
          url={article.url}
          index={index}
        />
      ))}
    </div>
  );
};

export default OtherNews;
