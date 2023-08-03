import React, { useState } from 'react'
import FData from '../Api/Fball.json'
import { Box, Stack, Container, FormControl, Button, FormControlLabel, FormLabel, LinearProgress,
  Grid, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useContext } from 'react';
import { AppContext } from '../Context/Newcontext';
import ScoreModal from './ScoreModal';
import QuizTimer from './Timer';



const Remarko = (mark)=>{
  if(mark >= 80) return {text:'an Excellent Score', color:'green', quote:'You are a Football Guru'} 
  else if(mark >= 60) return {text:'a good score', color:'dodgerblue', quote:'I guess you are learning about Football'}
  else if(mark >= 50) return {text:'a fair score but try harder', color:'orange', quote:'At least you can spell Football'}
  else return {text:'a terrible score indeed!', color:'red',quote:'Just forget about football, its not in the cards for you'}
}


const CusFormControlLabel = styled(FormControlLabel)(({theme}) =>({
    padding:'5px',
    borderRadius:'5px',
    width:'100%',
    '&:hover':{
        backgroundColor:'dodgerblue',
        opacity:0.5,
        color:theme.palette.neutral.main
    }
}))

const Questions = () => {

    const {answeredQuestions, setAnsweredQuestions } = useContext(AppContext);
    const [sData, setSdata] = useState({quest:'', selectedChoice:'', correctChoice:''})
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    const [progress, setProgress] = useState(0)

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(true);

    const [timeStopper, setTimestopper] = useState(true);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClose2 = () => {
      handleClose();
      setOpen2(false);
      setAnsweredQuestions([])
    }

    
    const HandleSelect =(e, quest, cAnswer)=>{
        setSdata({quest:quest, selectedChoice:e.target.value, correctChoice:cAnswer})
    }
    
    const HandleNext = ()=>{
      setCounter((prevCounter) =>(prevCounter === FData.length -1 ? prevCounter : prevCounter + 1));
      Review();
      AddScore();
      setProgress((counter + 1) * 6.67)
      setSdata({quest:'', selectedChoice:'', correctChoice:''})
    }

    const HandleFinish = ()=>{
      setCounter((prevCounter) =>(prevCounter === FData.length -1 ? prevCounter : prevCounter + 1));
      Review();
      AddScore();
      setProgress((counter + 1) * 6.67)
      setSdata({quest:'', selectedChoice:'', correctChoice:''})
      handleOpen();
      setTimestopper(false)
    }

    const Review =()=>{
      if(counter < 15){
        setAnsweredQuestions(previewQuestions => {
          if(previewQuestions.some(questo => questo.question === sData.quest)){
            return [previewQuestions]
          }else{
            return [...previewQuestions, sData]
          }
      })
         
      } 
    }

    const AddScore = ()=>{
      if(sData.selectedChoice === FData[counter].correctAnswer && counter < 15){
        setScore(prevScore => prevScore + 6.67)
      }
    }
    const handleTimeUp = () => {
      console.log('Time is up!'); // You can perform any actions here when the time is up
      handleOpen();
      setOpen2(false)
    };

    const remark = Remarko(score);

    //console.log(counter, answeredQuestions)
  return (
    <Box sx={{ bgcolor: "bgcolor.main",px:2, py:{md:2, xs:3}}}>
      <Stack spacing={1} direction={'row'} justifyContent={'flex-end'}>
        <QuizTimer timeStopper={timeStopper} totalSeconds={180} onTimeUp={handleTimeUp}/>
      </Stack>
      
      {open2 
      ?
      <Container sx={{ my:{md:2, xs:2} }} maxWidth="md">
        <Box sx={{ display: 'flex', alignItems: 'center', py:2 }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${(
              progress.toFixed(0)
            )}%`}</Typography>
        </Box>
      </Box>
        <Paper sx={{ borderRadius: 2, p: 3 }} elevation={2}>
          <Typography lineHeight={1} gutterBottom variant="h5">
            {FData[counter]?.question}
          </Typography>

          <FormControl sx={{ width:'100%', px:2, py:3}}>
            <FormLabel sx={{py:2}} id="demo-radio-buttons-group-label">Options</FormLabel>
            <RadioGroup  aria-labelledby="demo-radio-buttons-group-label"
              value={sData?.answer} name="radio-buttons-group" onChange={(e)=>HandleSelect(e, FData[counter]?.question, FData[counter].correctAnswer)}
            >
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {FData[counter]?.options.map((option, index)=>(
                    <Grid key={index} item xs={12} sm={6}>
                        <CusFormControlLabel sx={{border:`1px solid ${sData?.selectedChoice === `${option}` ? '#386BC0': '#ccc'}`}} value={option} control={<Radio/>} label={option}/>
                    </Grid>
                ))}
              </Grid>
            </RadioGroup>
          </FormControl>
          <Stack spacing={1} justifyContent='flex-end' direction='row'>
            {counter === FData.length - 1 ?
              <Button onClick={HandleFinish} size='large' variant='contained'>Finish</Button>
              :
              <Button onClick={HandleNext} size='large' variant='contained'>Next</Button>
            }
            
          </Stack>
          
        </Paper>
      </Container>
        :
        <Box my={6} py={2} >
          <Typography color={'error'} textAlign={'center'} gutterBottom variant='h3'>Quiz Trivia is Over</Typography>
          <Stack direction={'row'} justifyContent={'center'}>
            <Button size='large' color='error' variant='outlined' href='/'>Restart Quiz</Button>
          </Stack>
        </Box>
      }
      <ScoreModal handleClose2={handleClose2} handleClose={handleClose} score={score} handleOpen={handleOpen} open={open} setOpen={setOpen} remark={remark} />
    </Box>
  );
}

export default Questions