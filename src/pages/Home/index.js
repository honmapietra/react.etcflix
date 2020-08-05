import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import data from '../../components/data/dados_iniciais.json';

const firstCategory = data.categorias[0];

function Home() {
  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {

      });
  });

  return (
    <div style={{ backgroundColor: '#141414' }}>
      <Menu buttonLabel="Novo Vídeo" />
      <BannerMain
        videoTitle={firstCategory.titulo}
        videoDescription={firstCategory.videos[0].titulo}
        url={firstCategory.videos[0].titulo}
      />
      {data.categorias.map((categoria, indice) => <Carousel key={indice} category={categoria} />)}
      <Footer />
    </div>
  );
}

export default Home;
