// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>50% decrease in direct mail volume</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Issuers experienced a stark slowdown in direct mail volume this year.
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          19.8M
        </Typography>
        <Button size='small' variant='contained'>
          View Stats
        </Button>

      </CardContent>
    </Card>
  )
}

export default Trophy
