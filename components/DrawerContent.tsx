import React from 'react'
import { Grid, Drawer } from '@mui/material'
import muscles from '../constants/muscles'
import MenuItem from './MenuItem'

export default function DrawerContent() {

    return (
        <Grid container item direction='column' justifyContent='center' sx={{ backgroundColor: '#CE7777' }}>
            {muscles.map((muscle) => {
                return <MenuItem key={muscle} muscle={muscle} />
            })}
        </Grid>
    )
}

