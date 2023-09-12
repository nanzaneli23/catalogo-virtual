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

        />
      ))
    )}
    </Container>
     
    </>
  );
}

export default App;
