import React from 'react'
import { Grid, Button, Typography } from '@mui/material'

interface PropsInterface {
    muscle: string
    setCurrentMuscle: (muscle: string) => void
}

export default function MenuItem(props: PropsInterface) {
    const { muscle, setCurrentMuscle } = props;

    function handleMuscleChange(selectedMuscle: string) {
        setCurrentMuscle(selectedMuscle)
    }

    return (
        <Grid container item md={3} justifyContent='center' alignItems='center'>
            <Button sx={{ width: '100%', color: 'white' }} onClick={() => handleMuscleChange(muscle)}>
                <Typography variant='h6' sx={{ margin: '1rem 0', fontWeight: 'bold' }}>{muscle}</Typography>
            </Button>
        </Grid>
    )
}

