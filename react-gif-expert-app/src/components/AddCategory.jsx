
import { useState } from "react";

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('One punch');

  const onInputChange = (event) => {
    setInputValue( event.target.value );
  }

  return (
    <input
      type="text"
      placeholder="gifs searcher"
      value={ inputValue }
      onChange={ (event) => onInputChange(event) }
      />
  )
}
