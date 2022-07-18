import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {

    setCategories([ 'Valorant', ...categories ]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>

      {/* Input */}

      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Add Category</button>

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
