import { Container, TextField , Box, Typography,Button, Alert } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import MenuResponsivo from './components/MenuResponsivo';




function Cadastro() {

    const[ nome, setNome ] = useState("");
    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const[ telefone, setTelefone ] = useState("");
    const[ CPF, setCPF ] = useState("");
    const[cadastro, setCadastro]= useState(false);
    const[ erro, setErro]  = useState(false);
   
    function Cadastrar(evento){
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND +"users", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(

                {
                    email: email,
                    senha: senha,
                    cpf:CPF,
                    telefone:telefone,
                    nome:nome

                                }
            )
        })
        .then((resposta) => resposta.json() )
        .then((json) => {
            if( json.cpf){
                setCadastro( true );
            }else{
                setErro( true );
                setCadastro(false);
            }
         } )
        .catch((erro) => { setErro(true) })
    }
    useEffect( ()=>{
        setNome("");
        setEmail("");
        setCPF("");
        setTelefone("");
        setSenha("");
        //setCadastro(false);
        
    

    }, [cadastro]);

  return (
    <>
 <MenuResponsivo></MenuResponsivo>
    
    <Container component="section" maxWidth="xs">
         <Box sx={{
        mt:5,
        backgroundColor:"#BFE0BF",
        padding:"40px",
        borderRadius:"10px",
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
       
}}>      
     <Typography component="span" variant='h4'>Cadastro</Typography>
        
    {erro &&(<Alert severity='warning' sx={{ mt:2, mb:2}}>Desculpe tente novamente</Alert>)}
    {cadastro &&(<Alert severity='success' sx={{ mt:2, mb:2}}>Obrigado por se cadastrar</Alert>)}
    <Box component="form" onSubmit={Cadastrar}>

    <TextField 
            label="Nome"
            variant= "filled" 
            type="text" 
            margin='normal'
            value={nome}
            onChange={(e)=> setNome( e.target.value )}
            fullWidth 
            
             />
           
       
       <TextField 
            label="Email"
            variant= "filled" 
            type="email" 
            margin='normal'
            value={email}
            onChange={(e)=> setEmail( e.target.value )}
            fullWidth 
            
             />
           <TextField
            label="Senha" 
            variant= "filled" 
            type="password"
            margin='normal'
            value={senha}
            onChange={(e)=> setSenha( e.target.value )}
            fullWidth 
            />
             <TextField
            label="Repita senha" 
            variant= "filled" 
            type="password"
            margin='normal'
            value={senha}
            onChange={(e)=> setSenha( e.target.value )}
            fullWidth 
            />
            <TextField 
            label="Telefone"
            variant= "filled" 
            type="number" 
            margin='normal'
            value={telefone}
            onChange={(e)=> setTelefone( e.target.value )}
            fullWidth 
            
             />
           
           <TextField 
            label="CPF"
            variant= "filled" 
            type="number" 
            margin='normal'
            value={CPF}
            onChange={(e)=> setCPF( e.target.value )}
            fullWidth 
            
             />
           
           <Button  type="submit"   variant="contained" fullWidth sx={ {mt:2, mb:2} } >Cadastrar-se</Button>


     

    </Box>
        </Box>
         </Container>
    
        
    
    </>
  )
}

export default Cadastro;