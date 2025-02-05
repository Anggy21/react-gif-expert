import { useState } from "react";
import {GifGrid, AddCategory} from "./components";


const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( onNewCategory ) => {

    if (categories.includes(onNewCategory)) return;
    
    setCategories( [ onNewCategory, ...categories] );
    
  }   

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory  
        //setCategories={ setCategories }
        onNewCategory={ e => onAddCategory(e)}
      />

  

      { 
        categories.map( category => (
            <GifGrid 
              key={ category } 
              category={ category}/>
          ))
        }


    </>
  )
}

export default GifExpertApp;