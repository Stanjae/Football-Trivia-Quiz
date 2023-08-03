import React from 'react'
import NavBar from './Navbar'
import { Outlet, useParams } from 'react-router-dom'
import Footero from './Footer'
import { Box } from '@mui/material'
import { useMatches } from 'react-router-dom';

const Root = () => {
    const paramo = useParams();
    const longo = useMatches()[1].pathname;
    console.log(longo, 'next');
  return (
    <Box sx={{height:`${longo ==='/reviews' ? 'auto': '100vh'}`}}>
        <>
        <NavBar/>
        </>
        <Box sx={{height:'82.4%', bgcolor:`${paramo.questions == 'questions' ? 'bgcolor.main':'#fff' }` }}>
            <Outlet/>
        </Box>
        <>
        <Footero/>
        </>
    </Box>
  )
}

export default Root