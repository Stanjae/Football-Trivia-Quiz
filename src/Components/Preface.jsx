import { Box, Button, Container, Fade, Paper, TextField, Typography, MenuItem, Stack, Grow} from '@mui/material'
import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/Newcontext';
import { useNavigate } from 'react-router-dom';
import footballio from '../assets/football.png'

const currencies = [
    { value: 'Male',},{ value: 'Female'},
    {value: 'Binary',},
    {value: 'Transgender',},
  ];

 
const Preface = () => {
    const [credentials, setCredentials] = useState({name:'', nickname:'', gender:'Male'})
    const [highway, setHighway] = useState(true);
    const navigato = useNavigate();

    const {setMydetails, mydetails} = useContext(AppContext);
  
    const HandleType =(e)=>{
        setCredentials(prevCredentials => ({...prevCredentials, [e.target.name]:e.target.value}))
    };

    const HandleSubmit =(e)=>{
        e.preventDefault();
        setMydetails(credentials);
        setHighway(false);
        
    }

    const HandleStartQuiz =()=>{
        navigato('/questions')
    }
  return (
    <Box py={3}>
        <Container maxWidth='sm'>
            <Typography component={'div'} py={2} fontWeight={600} variant='h3' textAlign={'center'}>
                <img src={footballio}/>
                Soccer Trivia Quiz
            </Typography>
            <Grow mountOnEnter unmountOnExit timeout={1200} style={{ transitionDelay: highway ? '0s' : '0ms' }} in={highway}>
                <Paper component={'form'} onSubmit={HandleSubmit} sx={{borderRadius:'0.5rem', my:'10%', py:4, px:3}} elevation={4}>
                    <TextField required onChange={(e)=>HandleType(e)} name='name' placeholder='Enter Your Name' size='small' value={credentials.name} label='Name' margin='normal' focused fullWidth/>
                    <TextField required onChange={(e)=>HandleType(e)} name='nickname' size='small' placeholder='Enter Your Nickname' value={credentials.nickname} label='Nickname' margin='normal' fullWidth/>
                    <TextField size='small' name='gender' required onChange={(e)=>HandleType(e)} sx={{width:200}} margin='normal' id="outlined-select-currency" placeholder='Select your Gender' select label="Gender" value={credentials.gender}>
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Stack direction={'row'} justifyContent={'flex-end'}>
                        <Button size='large' type='submit' variant='contained'>Next</Button>
                    </Stack>
                    
                </Paper>
            </Grow>
            <Fade mountOnEnter unmountOnExit timeout={1500} style={{ transitionDelay: !highway ? '1.5s' : '0ms' }} in={!highway}>
                <Paper sx={{borderRadius:'0.5rem', my:'10%', py:4, px:3}} elevation={1}>
                    <Typography py={3} lineHeight={1.5} component={'div'} variant='h5' gutterBottom fontWeight={500}>
                    Greetings, oh wise and witty <Typography variant='h5' component={'span'} color={'secondary'}>{credentials.nickname}</Typography> ! This quiz awaits your presence 
                    to be graced by your extraordinary knowledge!
                    </Typography>
                    <Stack direction={'row'} justifyContent={'flex-end'}>
                        <Button onClick={HandleStartQuiz} size='large' type='submit' variant='contained'>Start Quiz</Button>
                    </Stack>
                    
                </Paper>
            </Fade>
           
        </Container>
    </Box>
  )
}

export default Preface