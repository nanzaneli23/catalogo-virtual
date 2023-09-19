import { Avatar, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Produto from "./components/Produto";
import MenuResponsivo from "./components/MenuResponsivo";
import  "./global.css"



function App() {

  const [ produtos, setProdutos] = useState();
  const [ erro, setErro] = useState();
  

  useEffect( () =>{
    fetch( process.env.REACT_APP_BACKEND +"produtos", {
      method:"GET",
      headers: {
          'Content-Type': 'application/json'
      },
      
  })
  .then((resposta) => resposta.json() )
  .then((json) => { setProdutos(json)} )
  .catch((erro) => { setErro(true) })

  
  }, [])

  function Excluir(evento, id){
    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND +"produtos", {
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
      const novalista = produtos.filter((produto)=> produto._id !== id);
      setProdutos(novalista);
   } )
  .catch((error) => { setErro(true) })
  }

  return(
   
    <>
    <MenuResponsivo/>
   
   <h1>Principais Novidades </h1>
    <Container sx={{
      display:"flex",
      flexFlow: "row",
      flexWrap: "wrap",
      gap:"2rem",
      
      
    }}>
    
    
    {produtos && (
      produtos.map((produto, index) => (
        <Produto imagem={produto.imagem}
        titulo={produto.titulo}
        duracao={produto.duracao}
        ano={produto.ano}
        categoria={produto.categoria}
        descricao={produto.descricao}
        excluir={(e) => Excluir(e, produto._id)}
        id={produto._id}

        />
      ))
    )}
    </Container>
     
    </>
  );
}

export default App;
