import React from 'react'
import MyButton from './MyButton'





const LoadProjects = () => {

const myStuff = [
    {
        title:"Day Trading",
        description: "I've been trading Index CFDs since the beginning of 2023, had lots of fun and enjoyed the A.M. session!",
        images: null
    },



            ];


  return (
        <div>
    {myStuff.map((adventure, index) => (
        <MyButton key={index} 
        title={adventure.title}
        description={adventure.description}
        images={adventure.images} />

    ))}
        </div>
     
  );
};

export default LoadProjects