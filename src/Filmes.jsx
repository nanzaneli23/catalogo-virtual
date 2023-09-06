import { Box, Button, Container,  TextField, Typography, Alert} from '@mui/material';
import React, {  useEffect, useState } from 'react'


function Filmes() {
    const[ titulo, setTitulo ] = useState("");
    const[ descricao, setDescricao ] = useState("");
    const[ ano, setAno ] = useState("");
    const[ duracao, setDuracao ] = useState("");
    const[ categoria, setCategoria ] = useState("");
    const[ imagem, setImagem ] = useState("");
    const[ filmes, setFilmes ] = useState("");
    const[ erro, setErro ] = useState("");
    const[ cadastro, setCadastro ] = useState("");
    
   
    function Cadastrofilme (evento){
        evento.preventDefault();
        fetch("http://10.139.75.32:8080/filmes", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(

                {
                    ano: ano,
                    categoria : categoria,
                    duracao:duracao,
                    descricao:descricao,
                    titulo:titulo

                                }
            )
        })
        .then((resposta) => resposta.json() )
        .then((json) => {
            if( json.titulo){
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
     <Typography component="span" variant='h4'>Filmes</Typography>
     {erro &&(<Alert severity='warning' sx={{ mt:2, mb:2}}>Desculpe tente novamente</Alert>)}
    {cadastro &&(<Alert severity='success' sx={{ mt:2, mb:2}}>Obrigado por cadastrar seu filme</Alert>)}
    <Box component="form" onSubmit={Cadastrofilme}>

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
            label="Ano" 
            variant= "filled" 
            type="number"
            margin='normal'
            value={ano}
            onChange={(e)=> setAno( e.target.value )}
            fullWidth 
            />
             <TextField
            label="Duração" 
            variant= "filled" 
            type="text"
            margin='normal'
            value={duracao}
            onChange={(e)=> setDuracao( e.target.value )}
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
            
           
           <Button  type="submit"   variant="contained" fullWidth sx={ {mt:2, mb:2} } >Cadastrar Filme</Button>

           </Box>
        </Box>
         </Container>
  )
}

export default Filmes;