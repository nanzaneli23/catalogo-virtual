import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography,Link, Button } from '@mui/material'
import React from 'react'



function Produtos(props) {
  return (
    
  
    
    <Card sx={{ maxWidth: 345}}>
    <Card>
        <CardActionArea>
            <CardMedia 
             component="img"
             height="360"
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
        <Button onClick={props.excluir}>EXCLUIR</Button>
        </Grid>
        <Grid item xs={6}>
            <Button>
            <Link href={"edicao/" + props.id}>EDITAR</Link>
            </Button>
       
        </Grid>
       
    </Card>
    </Card>
     
  )
}

export default Produtos;