// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardImgTop = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image='/images/cards/glass-house.png' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Marketing Mobile Tools in Banking
        </Typography>
        <Typography variant='body2'>
          From credit checking to account monitoring, brands' marketing mobile tools are providing solutions..'.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
