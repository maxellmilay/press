import React from 'react'
import { Grid, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
import exercises from '../constants/exercise'
import CircleIcon from '@mui/icons-material/Circle';

const ExerciseContainer = styled(Grid)(({ theme }) => ({
    padding: '2rem 1rem',
    backgroundColor: '#FFF5F5',
    marginTop: '1rem'
}))

export default function Exercises() {
    const matches = useMediaQuery('(min-width:900px)')

    return (
        <Grid container item direction="column">
            {exercises.map((exercise) => {
                return (
                    <ExerciseContainer container item key={exercise.name} direction={matches ? "row" : 'column'}>
                        <Grid container item justifyContent='center' alignItems='center' md={8} wrap sx={{ marginBottom: matches ? '0' : '0.5rem' }}>
                            <CircleIcon sx={{ color: '#CE7777', fontSize: '5rem', marginRight: '1rem' }} />
                            <Grid container item direction="column" justifyContent="center" sx={{ flexGrow: '1' }}>
                                <Typography variant="h5">{exercise.name}</Typography>
                                <Typography>{exercise.muscle}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item direction={matches ? 'column' : 'row'} md={4} justifyContent="center" sx={{ flexWrap: matches ? 'wrap' : 'nowrap', padding: matches ? '0' : '0 5%' }}>
                            <Grid container item wrap>
                                <Grid container item md={6} justifyContent={matches ? "flex-end" : "center"} alignItems="center">
                                    <Typography>Sets</Typography>
                                </Grid>
                                <Grid container item md={6} justifyContent="center">
                                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>{exercise.sets}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item wrap>
                                <Grid container item md={6} justifyContent={matches ? "flex-end" : "center"} alignItems="center">
                                    <Typography>Reps</Typography>

                                </Grid>
                                <Grid container item md={6} justifyContent="center">
                                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>{exercise.repetition}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ ExerciseContainer>
                )
            })}
        </Grid>
    )
}

