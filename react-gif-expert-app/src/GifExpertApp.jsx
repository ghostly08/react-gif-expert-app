import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => {

    // console.log(newCategory);

    setCategories([ newCategory, ...categories ]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>

      {/* Input */}
      <AddCategory
      // setCategories={ setCategories }
        onNewCategory={ onAddCategory }
      />

      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Add Category</button> */}

      <ol>
        {
          categories.map( category => {
            return <li key={ category }>{ category}</li>
          })
        }
      </ol>
    </>
  )
};
