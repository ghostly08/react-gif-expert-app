
import { useState } from "react";

export const AddCategory = ({ setCategories }) => { // El argumento setCategories lo cogemos de las props, visto en el web dev tools.

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue( event.target.value );
    // console.log(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault(); // En este caso lo queremos para evitar que se haga un refresh del navegador - esto es default en los forms!!
    if( inputValue.trim().length <= 1) return;

    setCategories( (categories) => [ inputValue, ...categories ]);
    setInputValue(''); //Limpia el placeholder una vez das a intro
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="gifs searcher"
        value={ inputValue }
        onChange={ onInputChange } // Whitout this, the value is a read only, two write on the value we need an "onChange"
        />
    </form>
  )
}
