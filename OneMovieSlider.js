import './OneMovieSlider.css'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react'
import data from '../data';

const OneMovieSlider = () => {

    const[index, setIndex] = useState(0)
    const { id, image, title, description } = data[index]

const nextMovie = () => {
    const newIndex = index + 1
    setIndex(checMovieNumber(newIndex))
}

const previousMovie = () => {
    const newIndex = index - 1
    setIndex(checMovieNumber(newIndex))
}

const checMovieNumber = (movieIndex) => {
    if (movieIndex < 0) {
        return data.length - 1
    } else if (movieIndex > data.length - 1) {
        return 0
    } else {
        return movieIndex
    }
}

  return (
    <div className='one-movie' key={id}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
             <button onClick={previousMovie}>
            <FaArrowLeft/>
        </button>
        <button onClick={nextMovie}>
            <FaArrowRight/>
        </button>
      
     

    </div>
  )
}

export default OneMovieSlider