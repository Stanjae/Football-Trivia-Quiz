import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import {Box, Stack, Button} from '@mui/material/';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { AppContext } from '../Context/Newcontext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FData from '../Api/Fball.json'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {md:700, xs:400},
  bgcolor: 'background.paper',
  border: '1px solid transparent',
  borderRadius:'0.5rem',
  boxShadow: 24,
  py:4, px:3,
};

export default function ScoreModal({open, setOpen, handleClose, handleClose2, handleOpen, score , remark }) {
  const {answeredQuestions, mydetails} = useContext(AppContext);

  const answerNo = answeredQuestions.filter(item => item.quest === '');
  const naviagto = useNavigate()

  const correctAns = FData.filter((item, index)=> answeredQuestions[index]?.selectedChoice === item.correctAnswer)?.length
  console.log(correctAns, 'dope')

  const Handledirect =()=>{
    naviagto('/reviews')
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography textAlign='center' fontWeight={500} gutterBottom variant={'h4'} component="div">
              Hi {mydetails?.nickname}, your total Score is
            </Typography>
            <Typography color={'secondary'} textAlign='center' fontWeight={900} gutterBottom variant="h2" component="div">
              {score.toFixed(0) + '%'}
            </Typography>

            <Stack p={2} >
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography fontWeight={600}>Total Questions - </Typography>
                <Typography >{FData.length}</Typography>
              </Stack>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography fontWeight={600}>Total Questions Answered - </Typography>
                <Typography>{answeredQuestions.length - answerNo.length}</Typography>
              </Stack>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography fontWeight={600}>Questions Answered Correctly - </Typography>
                <Typography color={'success'}>{correctAns}</Typography>
              </Stack>
            </Stack>

            <Typography py={2} color={remark.color} fontWeight={600} variant='h6' textAlign={'center'}>{remark.quote}</Typography>

            <Stack spacing={{md:2, xs:1}} p={{md:2, xs:1}} direction={'row'} justifyContent={'center'}>
              <Button color='secondary' variant='contained' href='/'>Retake Quiz</Button>
              <Button onClick={Handledirect} color='primary' variant='outlined'>Review Result</Button>
              <Button onClick={handleClose2} color='error' variant='contained'>Cancel</Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
