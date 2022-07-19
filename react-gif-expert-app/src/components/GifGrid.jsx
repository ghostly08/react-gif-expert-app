import { getGifts } from '../helpers/getGifts';

export const GifGrid = ({ category }) => {

  getGif( category );

  return (
    <>
      <h3>{ category }</h3>
      <p>Hola Mundo!</p>
    </>
  )
}
