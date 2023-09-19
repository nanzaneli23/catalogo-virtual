import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography,Link } from '@mui/material'
import React from 'react'



function Produtos(props) {
  return (
    
  
    
    <Card sx={{ maxWidth: 345}}>
    <Card>
        <CardActionArea>
            <CardMedia 
             component="img"
             height="140"
             image={props.imagem}
             alt={props.titulo}
            />
           
            <CardContent>
            <Typography variant='h5' component="div">
                {props.titulo}
                </Typography>
                <Typography variant='body2'color="text.secondary">
                    {props.descricao}
            </Typography>
            <Grid container>
                <Grid item xs={2}>
                    <span>{props.categoria}</span>
                </Grid>
                
            </Grid>
            </CardContent>
        </CardActionArea>
        <Grid item xs={6}>
        <button onClick={props.excluir}>X</button>
        </Grid>
        <Grid item xs={6}>
        <Link href={"edicao/" + props.id}>Editar</Link>
        </Grid>
       
    </Card>
    </Card>
     
  )
}

export default Produtos;