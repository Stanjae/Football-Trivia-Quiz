import React from 'react'
import Typography from '@mui/material/Typography'
import {Paper, Box, Stack, Chip, Button} from '@mui/material/'
import { AppContext } from '../Context/Newcontext'
import { useContext } from 'react'
import FData from '../Api/Fball.json'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CachedIcon from '@mui/icons-material/Cached';

const Review = () => {
    const {answeredQuestions, setAnsweredQuestions } = useContext(AppContext);

  return (
    <Box sx={{p:{md:5, xs:1}}}>
        <Stack spacing={2} p direction={'row'} justifyContent={'center'}>
             <Button endIcon={<CachedIcon/>} size='large' variant='contained' color='secondary' href='/'>Restart</Button>  
        </Stack>

        {FData?.map((question, index)=>(
            <Paper key={index} sx={{p:2}} elevation={2}>
                <Typography variant="h5" color="initial">{question.question}</Typography>
                <Typography px={2} component={'div'} variant="subtitle1" color="initial">
                   <Typography component={'span'}>Your Answer - {answeredQuestions[index]?.selectedChoice}</Typography>
                   {question?.correctAnswer === answeredQuestions[index]?.selectedChoice ? <CheckCircleIcon fontSize='20px' color='success'/> 
                   : <CancelIcon fontSize='20px' color='error'/>}
                </Typography>
                <Typography px={2} component={'div'} variant="subtitle1" color="initial">
                    <Typography component={'span'}>Correct Answer - {question?.correctAnswer}</Typography>
                    <CheckCircleIcon fontSize='20px' color='success'/>
                </Typography>

                <Stack direction={'row'} justifyContent={'flex-end'}>
                {question?.correctAnswer === answeredQuestions[index]?.selectedChoice ?  <Chip label="Correct" color="success" /> : 
                        <Chip label="Incorrect" color="error" />}
                </Stack>
            </Paper>
           
        ))}
    </Box>
  )
}

export default Review