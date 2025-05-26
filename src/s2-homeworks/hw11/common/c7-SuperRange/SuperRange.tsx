import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '150px',
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: 1,
                },
                height: '4px',
                '& .MuiSlider-thumb': {
                    border: '1px solid #00CC22',
                    backgroundColor: 'white',
                    width: 20,
                    height: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&::before': {
                        content: '""',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#00CC22',
                        borderRadius: '50%',
                    },
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
