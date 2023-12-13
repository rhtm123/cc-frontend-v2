import React from 'react'
import { Blurhash } from "react-blurhash";


const LazyImageLoad = ({src, blurhash, alt_name}) => {
    const [isloaded, setIsloaded] = React.useState(false);

    const changeLoad = () => {
        setIsloaded(true);
    }
    
  return (
    <div className="image">
        <img style={{"display": isloaded?"block":"none"}} onLoad={changeLoad} src={src} alt={alt_name} />
        <Blurhash 
        style={{"display": isloaded?"none":"block"}}
            hash={blurhash}
            width={1000}
            resolutionX={32}
            resolutionY={32}
            />
        </div>
  )
}

export default LazyImageLoad