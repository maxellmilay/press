import Head from 'next/head'
import { Grid, Typography, useMediaQuery, Button } from '@mui/material'
import Exercises from '../components/Exercises'
import Menu from '../components/Menu'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import DrawerContent from '../components/DrawerContent'

export default function Home() {
  const matches = useMediaQuery('(min-width:900px)')
  const [open, setOpen] = useState(false)
  const [currentMuscle, setCurrentMuscle] = useState('Chest')

  function toggleMenu() {
    setOpen(!open)
  }

  return (
    <Grid container justifyContent='center' sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFD9D9', color: '#2B3A55', fontWeight: 'bold' }}>
      <Grid container item direction="column" sx={{ width: matches ? '60%' : '100%', minHeight: '100vh', backgroundColor: '#F0B6B6' }}>
        <Head>
          <title>Press</title>
        </Head>
        <Grid container item justifyContent='center' sx={{ backgroundColor: '#FF9F9F' }}>
          <Typography variant='h3' sx={{ margin: '1.5rem 0' }}>Press</Typography>
        </Grid>
        {matches
          ? <Menu setCurrentMuscle={setCurrentMuscle} />
          : <>
            <Button sx={{ padding: '0', backgroundColor: '#CE7777' }} onClick={toggleMenu}>
              <Grid container item justifyContent='center' sx={{ backgroundColor: '#CE7777' }}>
                <Grid container item md={3} justifyContent='center' alignItems='center'>
                  <MenuIcon sx={{ margin: '1rem 0', fontSize: '2rem', color: '#2B3A55' }} />
                </Grid>

              </Grid>
            </Button>
            {open && <Menu setCurrentMuscle={setCurrentMuscle} />}
          </>}
        <Grid container item justifyContent='center' alignItems='center' sx={{ backgroundColor: '#EB9595' }}>
          <Typography variant='h4' sx={{ margin: '1.25rem 0' }}>{currentMuscle} Exercises</Typography>
        </Grid>
        <Exercises />
      </Grid>
    </Grid>

  )
}
