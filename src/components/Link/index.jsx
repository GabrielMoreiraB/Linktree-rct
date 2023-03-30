import './Link.css';

const Link = ({link, nome}) => {
    return (
        <a href={link}>{nome}</a>
    )
}

export default Link;