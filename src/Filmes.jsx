import { Box, Button, Container,  TextField, Typography, Alert} from '@mui/material';
import React, {  useEffect, useState } from 'react'


function Produtos() {
    const[ titulo, setTitulo ] = useState("");
    const[ descricao, setDescricao ] = useState("");
    const[ ano, setAno ] = useState("");
    const[ duracao, setDuracao ] = useState("");
    const[ categoria, setCategoria ] = useState("");
    const[ imagem, setImagem ] = useState("");
    const[ erro, setErro ] = useState("");
    const[ cadastro, setCadastro ] = useState("");
    
   
    function Cadastroprodutos (evento){
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND +"produtos", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(

                {
                    ano: " ",
                    categoria : categoria,
                    duracao:" ",
                    descricao:descricao,
                    titulo:titulo,
                    imagem:imagem

                                }
            )
        })
        .then((resposta) => resposta.json() )
        .then((json) => {
            if( json._id){
                setCadastro( true );
                setErro(false)
            }else{
                setErro( true );
                setCadastro(false);
            }
         } )
        .catch((erro) => { setErro(true) })
    }
    useEffect( ()=>{
        setTitulo("");
        setDescricao("");
        setAno("");
        setDuracao("");
        setImagem("");
        setCategoria("");
        //setfilmes(false);
        
    

    }, [cadastro]);

  return (
   
    <Container component="section" maxWidth="xs">
         <Box sx={{
        mt:20,
        backgroundColor:"#BFE0BF",
        padding:"40px",
        borderRadius:"10px",
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
       
}}>      
     <Typography component="span" variant='h4'>Produtos</Typography>
     {erro &&(<Alert severity='warning' sx={{ mt:2, mb:2}}>Desculpe tente novamente</Alert>)}
    {cadastro &&(<Alert severity='success' sx={{ mt:2, mb:2}}>Obrigado por cadastrar seu produto</Alert>)}
    <Box component="form" onSubmit={Cadastroprodutos}>

    <TextField 
            label="Titulo"
            variant= "filled" 
            type="text" 
            margin='normal'
            value={titulo}
            onChange={(e)=> setTitulo( e.target.value )}
            fullWidth 
            
             />
           
       
       <TextField 
            label="Descrição"
            variant= "filled" 
            type="text" 
            margin='normal'
            value={descricao}
            onChange={(e)=> setDescricao( e.target.value )}
            fullWidth 
            
             />
          
            
            <TextField 
            label="Categoria"
            variant= "filled" 
            type="text" 
            margin='normal'
            value={categoria}
            onChange={(e)=> setCategoria( e.target.value )}
            fullWidth 
            
             />
              <TextField 
            label="Imagem"
            variant= "filled" 
            type="text" 
            margin='normal'
            value={imagem}
            onChange={(e)=> setImagem( e.target.value )}
            fullWidth 
            
             />
            
           
           <Button  type="submit"   variant="contained" fullWidth sx={ {mt:2, mb:2} } >Cadastrar Produtos</Button>

           </Box>
        </Box>
         </Container>
  )
}

export default Produtos;