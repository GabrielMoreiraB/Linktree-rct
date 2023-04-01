import './Link.css';

const Link = ({botoes}) => {
    console.log(botoes)
    return (
        <div className='botoes-container'>
            {botoes.map(botao => <a href={botao.link} key={botao.id} target='blank'> <img src="/img/linksimbol.svg" alt="" /> {botao.nome} <img src="/img/linksimbol.svg" alt="" /></a>)}
        </div>
    )
}

export default Link;