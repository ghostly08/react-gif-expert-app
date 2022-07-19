
import { useState } from "react";

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = (event) => {
    setInputValue( event.target.value );
    // console.log(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault(); // En este caso lo queremos para evitar que se haga un refresh del navegador - esto es default en los forms!!
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input
        type="text"
        placeholder="gifs searcher"
        value={ inputValue }
        onChange={ onInputChange } // Whitout this, the value is a read only, two write on the value we need an "onChange"
        />
    </form>
  )
}
