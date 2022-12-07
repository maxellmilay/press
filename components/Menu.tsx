import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import muscles from '../constants/muscles'
import MenuItem from './MenuItem'

export default function Menu() {
    return (
        <Grid container item justifyContent='center' sx={{ backgroundColor: '#CE7777' }}>
            {muscles.map((muscle) => {
                return <MenuItem key={muscle} muscle={muscle} />
            })}
        </Grid>
    )
}
