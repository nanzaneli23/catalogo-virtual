import { Avatar, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Filme from "./components/Filme";

function App() {

  const [ filmes, setFilmes] = useState();
  const [ erro, setErro] = useState();
  

  useEffect( () =>{
    fetch( process.env.REACT_APP_BACKEND +"filmes", {
      method:"GET",
      headers: {
          'Content-Type': 'application/json'
      },
      
  })
  .then((resposta) => resposta.json() )
  .then((json) => { setFilmes(json)} )
  .catch((erro) => { setErro(true) })

  
  }, [])

  function Excluir(evento, id){
    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND +"filmes", {
      method:"DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      }

      )
  })
  .then((resposta) => resposta.json() )
  .then((json) => {
      const novalista = filmes.filter((filme)=> filme._id !== id);
      setFilmes(novalista);
   } )
  .catch((error) => { setErro(true) })
  }

  return(
    <>
    <h1>Filmes</h1>
    <Container sx={{
      display:"flex",
      flexFlow: "row",
      flexWrap: "wrap",
      gap:"2rem"
    }}>
    
    
    {filmes && (
      filmes.map((filme, index) => (
        <Filme imagem={filme.imagem}
        titulo={filme.titulo}
        duracao={filme.duracao}
        ano={filme.ano}
        categoria={filme.categoria}
        descricao={filme.descricao}
        excluir={(e) => Excluir(e, filme._id)}
        id={filme._id}

        />
      ))
    )}
    </Container>
     
    </>
  );
}

export default App;
