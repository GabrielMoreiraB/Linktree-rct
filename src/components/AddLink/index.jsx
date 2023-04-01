import './AddLink.css';


const AddLink =(props) => {

    return (
         <>
            <div className='name-container'>
                <label htmlFor='linkName'>Nome: </label>
                <input 
                tipe="text"
                name="linkName"
                placeholder='Linkedin...'
                value={props.valorNome || ""}
                onChange={(evento) => {props.aoAlteradoNome(evento.target.value)}}
                />
            </div>
            <div className='link-container'>
                <label htmlFor='linkName'>Link: </label>
                <input 
                tipe="text"
                name="linkName"
                placeholder='https://www.linkedin.com/in/...'
                value={props.valorLink || ""}
                onChange={(evento) => {props.aoAlteradoLink(evento.target.value)}}
                />
            </div>
           
        </>


    )
}

export default AddLink