import { useState } from 'react';
import './Header.css';



const Header = () => {

    const [img, setImg] = useState("");

    const aoDigitado = (evento) => {
        setImg(evento.target.value)
    }

    return(
        <section className='Header'>
            
            <h1 className='title'>Organo Links</h1>
            <div className='form-container'>
                <label htmlFor='link-img'>Link Para sua foto: </label>
                <input 
                tipe="text"
                name="link-img"
                placeholder='https://github.com/...   .png'
                value={img || ""}
                onChange={aoDigitado}
                />
            </div>
            <div className='img-container'>
                <img src={img == 0 ? "https://github.com/GabrielMoreiraB.png" : img} alt={img}/>
            </div>
        </section>
    )
}

export default Header