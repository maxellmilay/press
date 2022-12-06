import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Grid, Typography } from '@mui/material'

export default function Home() {
  return (
    <Grid container justifyContent='center' sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFD9D9', color: '#2B3A55', fontWeight: 'bold' }}>
      <Grid container item direction="column" sx={{ width: '60%', minHeight: '100vh', backgroundColor: '#F0B6B6' }}>
        <Head>
          <title>Press</title>
        </Head>
        <Grid container item justifyContent='center' sx={{ backgroundColor: '#FF9F9F' }}>
          <Typography variant='h3' sx={{ margin: '1.5rem 0' }}>Press</Typography>
        </Grid>
        <Grid container item justifyContent='center' sx={{ backgroundColor: '#CE7777' }}>
          <Grid container item md={3} justifyContent='center' alignItems='center'>
            <Typography variant='h6' sx={{ margin: '1rem 0' }}>Chest</Typography>
          </Grid>
          <Grid container item md={3} justifyContent='center' alignItems='center'>
            <Typography variant='h6' sx={{ margin: '1rem 0' }}>Arm</Typography>
          </Grid>
          <Grid container item md={3} justifyContent='center' alignItems='center'>
            <Typography variant='h6' sx={{ margin: '1rem 0' }}>Back</Typography>
          </Grid>
          <Grid container item md={3} justifyContent='center' alignItems='center'>
            <Typography variant='h6' sx={{ margin: '1rem 0' }}>Leg</Typography>
          </Grid>
        </Grid>
        <Grid container item justifyContent='center' alignItems='center' sx={{ backgroundColor: '#EB9595' }}>
          <Typography variant='h4' sx={{ margin: '1.25rem 0' }}>Chest Exercises</Typography>
        </Grid>
      </Grid>
    </Grid>

  )
}
