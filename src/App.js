import { useState } from 'react';
import Banner from './componentes/Banner';
import Colaborador from './componentes/Colaborador';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';




function App() {


  const times = [
    {
      nome:'Diretores',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Vendedores',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF',
    },
    {
      nome:'Produção',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Administrativo',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Logística',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
  ]

  const [colaboradores, setColadoradores]= useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    
    setColadoradores([...colaboradores, colaborador])

  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)}aoColaboradorCadastrado={colaborador=> aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome}
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
      <Rodape />
     
    </div>
  );
}

export default App;
