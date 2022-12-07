import React from 'react'
import { Grid, Button, Typography } from '@mui/material'

interface PropsInterface {
    muscle: string
}

export default function MenuItem(props: PropsInterface) {
    const { muscle } = props;

    return (
        <Grid container item md={3} justifyContent='center' alignItems='center'>
            <Button sx={{ width: '100%', color: '#2B3A55' }}>
                <Typography variant='h6' sx={{ margin: '1rem 0' }}>{muscle}</Typography>
            </Button>
        </Grid>
    )
}

