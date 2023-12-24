import React from "react";
import "../newsCard.css";
import style from "../newscard.module.css";
const NewsCard=(props)=>{
    function returnProps(){
       console.log(props.url)
    }
    
    function readNews(){
       
        document.querySelectorAll(".description")[props.index].classList.toggle("active")
      if(document.querySelectorAll(".description")[props.index].classList.contains("active"))  {
        document.querySelectorAll("button")[props.index].innerHTML="Read Less.."
      }else{
        document.querySelectorAll("button")[props.index].innerHTML="Read More"

      }
    }
    return(
        <div className={style.newscard}>
            <div className={style.image}>
                <img src={props.image} alt="Image Not Found"/>

            </div>
            
            <h2 className={style.title} >{props.title}</h2>
            <div className="description">
           
           
                <p>{props.description}</p>
                <a href={props.url}>Click here</a>
            </div>
            <button href={props.url} onClick={readNews}>Read More</button>
            
        </div>
    )
}
export default NewsCard;
