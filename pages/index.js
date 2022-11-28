import React from "react";
import Card from "../components/Card";


function Home(){
    return(
      <div className="p-8 flex justify-center  flex-wrap ">
        <Card name="menu"/>
        <Card name="place order"/>
        <Card name="history" />
        <Card name="offers and promos" />
        <Card name="Deals" />
        <Card name="Help" />
        
        
        
      </div>
    )
}

export default Home;
