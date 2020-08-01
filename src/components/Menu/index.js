import React, {Component} from 'react';
import logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

class Menu extends Component {
    render(){
        return (
            <nav className='menu'>
                <a href='/'>
                    <img className={'logo'} src={logo} alt='Aluraflix Logo'></img>
                </a>


                <Button as="a" href={'/'} >
                    Novo Vídeo
                </Button>
            </nav>
        );
    }
}

export default Menu;