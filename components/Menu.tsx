import React from 'react'
import { Grid, Typography, Button, useMediaQuery } from '@mui/material'
import muscles from '../constants/muscles'
import MenuItem from './MenuItem'

interface PropsInterface {
    setCurrentMuscle: (muscle: string) => void
}

export default function Menu(props: PropsInterface) {
    const { setCurrentMuscle } = props
    const matches = useMediaQuery('(min-width:900px)')

    return (
        <Grid container item direction={matches ? "row" : "column"} justifyContent='center' sx={{ backgroundColor: '#E3383B' }}>
            {muscles.map((muscle) => {
                return <MenuItem key={muscle} muscle={muscle} setCurrentMuscle={setCurrentMuscle} />
            })}
        </Grid>
    )
}
