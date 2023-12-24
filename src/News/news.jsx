import React, { useEffect, useState } from "react";
import style from "../news.module.css";
import NewsCard from "./news-card";
const News = ({articles}) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults(articles);
  }, [articles]);

  return (
    <div>
       
       
      <div className={style.news}>
          {results.map((result,i)=>{
            return(
              <NewsCard key={i} index={i} title={result.title} description={result.description}
              image={result.urlToImage} url={result.url}
              />

            )
          })}
      </div>    
    </div>
    
  );
};

export default News;
