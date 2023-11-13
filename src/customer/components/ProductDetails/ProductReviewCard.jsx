import { Avatar, Rating } from '@mui/material'
import { Box } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid/Grid'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
<Grid item xs={1}>
<Box>
    <Avatar className='text-white ' style={{backgroundColor:" rgb(29 78 216)"}} xs={{width:56,height:56 , bgcolor:'blue'}}>
R
    </Avatar>
</Box>
</Grid>
<Grid item xs={9} >
<div className='space-y-2 text-justify items-center'>
    <div>
        <p className='font-semibold text-lg'>Ram</p>
        <p className='opacity-70'>April 5, 2023</p>
    </div>
<Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
<p>Nice Produt, and i love this product</p>
</div>
</Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard
