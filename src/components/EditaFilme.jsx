import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function EditaProdutos() {

    const { id } =useParams();

    

    const[ titulo, setTitulo ] = useState("");
    const[ descricao, setDescricao ] = useState("");
    const[ ano, setAno ] = useState("");
    const[ duracao, setDuracao ] = useState("");
    const[ categoria, setCategoria ] = useState("");
    const[ imagem, setImagem ] = useState("");
    const[ erro, setErro ] = useState(false);
    const[ editar, setEditar ] = useState(false);

    useEffect(()=>{
        fetch( process.env.REACT_APP_BACKEND +"produtos/" + id, {
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            }
           
        })
        .then((resposta) => resposta.json() )
        .then((json) => {
            if(!json.status)  {
                setTitulo(json.titulo);
          setDescricao(json.descricao);
          setCategoria(json.categoria);
          setDuracao(json.duracao);
          setAno(json.ano);
          setImagem(json.imagem);
            } else{
                setErro("Produto não encontrado");
            }
         
         } )
        .catch((erro) => { setErro("opps ocorreu um erro") })

    }, []);

    function Editar(evento){
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND +"produtos", {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(

                {   
                    id:id,
                    ano: ano,
                    categoria : categoria,
                    duracao:duracao,
                    descricao:descricao,
                    titulo:titulo,
                    imagem:imagem

                                }
            )
        })
        .then((resposta) => resposta.json() )
        .then((json) => {
            if( json._id){
                setEditar( true );
                setErro(false)
            }else{
                setErro( true );
                setEditar("Não foi possível editar o produtos");
            }
         } )
        .catch((erro) => { setErro(true) })
    }

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
 <Typography component="span" variant='h4'>Edição</Typography>
        
        {erro &&(<Alert severity='warning'>{erro}</Alert>)}
        {editar &&(<Alert severity='success'>Produto editado com sucesso</Alert>)}

        <Box component="form" onSubmit={Editar}>

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
       
       <Button  type="submit"   variant="contained" fullWidth sx={ {mt:2, mb:2} } >Editar</Button>


 
    </Box>
    </Box>
   </Container>
  )
}

export default EditaProdutos;