import React, {Component} from 'react';
import data from './data/dados_iniciais.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carrousel from './components/Carousel';
import Footer from './components/Footer';

class App extends Component{
    render(){
        const {categorias} = data;
        return (
            <div>
                <Menu />
                <BannerMain 
                    videoTitle = "Imersão React Live #01" 
                    videoDescription = "Imersão React Live #01 - Analisando o front-end do Netflix, do Spotify e do Ifood" 
                    url = "https://youtu.be/Dcn-tVmSxyU"/>


                {categorias.map(category => (
                    <Carrousel key={category.titulo} ignoreFirstVideo={false} category={category}/>   
                ))}

                <Footer />                
            </div>
        );
    }
}

export default App;