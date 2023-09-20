import { Box, Button, Container, Checkbox, FormControlLabel, TextField, Grid, Typography, Alert } from '@mui/material';
import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import MenuResponsivo from './components/MenuResponsivo';


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#12a01c',
        },
        secondary: {
          main: '#962A2E',
        },
      },
    });

function Login() {

    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const[ lembrar, setLembrar ] = useState(false);
    const[ login, setLogin]  = useState(false);
    const[ erro, setErro]  = useState(false);
    const Navigate = useNavigate();

    /*As aspas do setEmail e setSenha indicam que o campo está vazio.
    e o localStorage salva os dados desse mesmo campos e o UseState (false) indica que 
    os campos possuem informação falsa na página do login*/
    
    
    useEffect(()=> {
        if(login) {
           
            setEmail("");
            setSenha("");
            Navigate("/");
        }
       

    }, [ login ]);

    function Autenticar(evento) 
    {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND +"login", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(

                {
                    email: email,
                    senha: senha
                }
            )
        })
        .then((resposta) => resposta.json() )
        .then((json) => {
            if( json.user ){
                localStorage.setItem("usuario", JSON.stringify(json.user._id));
                setLogin( true );
            }else{
                localStorage.removeItem("usuario");
                setErro( true );
            }
         } )
        .catch((erro) => { setErro(true) })
    }
      return (
      <>
    <MenuResponsivo></MenuResponsivo>

    <ThemeProvider theme={theme}>
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
        <Typography component="span" variant='h4'>Entrar</Typography>
        {erro && (<Alert severity="warning">Revise os seus dados e tente novamente</Alert>)}
        <Box component="form" onSubmit={Autenticar}>

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
           <FormControlLabel

           control={ <Checkbox  value={lembrar} name="lembrar" onChange={(e) => setLembrar(!lembrar)}/> }
           label="Lembrar-me"
             />
          
           <Button  type="submit"   variant="contained" fullWidth sx={ {mt:2, mb:2} } >Login</Button>
           <Grid container>
            <Grid item xs>
                Esqueci a senha
            </Grid>
            <Grid item>
                <a className='color' href="http://localhost:3000/Cadastro">Cadastrar</a>
            </Grid>
           </Grid>
        </Box>
    </Box>
   </Container>
   </ThemeProvider>
 </>
  )
}

export default Login;