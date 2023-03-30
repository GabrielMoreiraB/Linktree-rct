import Link from '../Link';
import './Botao.css';

const Botao = (props) => {
    return (
        <div className='botoes-container'>
            {props.botoes.map(botao => <Link key={botao.link} nome={botao.nome} link={botao.link} />)}
        </div>
    )
}

export default Botao