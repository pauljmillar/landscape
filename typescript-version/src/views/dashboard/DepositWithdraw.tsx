// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider, { DividerProps } from '@mui/material/Divider'
import Button from '@mui/material/Button'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ChartLine from 'mdi-material-ui/ChartLine'
import Twitter from 'mdi-material-ui/Twitter'


interface DataType {
  logo: string
  title: string
  amount: string
  subtitle: string
  logoWidth: number
  logoHeight: number
}

const depositData = [
  {
    logoWidth: 28,
    logoHeight: 29,
    amount: '+$4,650',
    subtitle: 'Sell UI Kit',
    title: 'Gumroad Account',
    logo: '/images/logos/gumroad.png'
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '+$92,705',
    title: 'Mastercard',
    subtitle: 'Wallet deposit',
    logo: '/images/logos/mastercard-label.png'
  },
  {
    logoWidth: 20,
    logoHeight: 28,
    amount: '+$957',
    title: 'Stripe Account',
    subtitle: 'iOS Application',
    logo: '/images/logos/stripe.png'
  },
  {
    logoWidth: 34,
    logoHeight: 32,
    amount: '+$6,837',
    title: 'American Bank',
    subtitle: 'Bank Transfer',
    logo: '/images/logos/american-bank.png'
  },
  {
    logoWidth: 33,
    logoHeight: 22,
    amount: '+$446',
    title: 'Bank Account',
    subtitle: 'Wallet deposit',
    logo: '/images/logos/citi-bank.png'
  }
]

const withdrawData = [
  {
    logoWidth: 29,
    logoHeight: 30,
    amount: '-$145',
    title: 'Google Adsense',
    subtitle: 'Paypal deposit',
    logo: '/images/logos/google.png'
  },
  {
    logoWidth: 34,
    logoHeight: 34,
    amount: '-$1870',
    title: 'Github Enterprise',
    logo: '/images/logos/github.png',
    subtitle: 'Security & compliance'
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: '-$450',
    title: 'Upgrade Slack Plan',
    subtitle: 'Debit card deposit',
    logo: '/images/logos/slack.png'
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: '-$540',
    title: 'Digital Ocean',
    subtitle: 'Cloud Hosting',
    logo: '/images/logos/digital-ocean.png'
  },
  {
    logoWidth: 36,
    logoHeight: 21,
    amount: '-$21',
    title: 'AWS Account',
    logo: '/images/logos/aws.png',
    subtitle: 'Choosing a Cloud Platform'
  }
]

// Styled Divider component
const Divider = styled(MuiDivider)<DividerProps>(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const DepositWithdraw = () => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
                <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
                      <EmailOutline sx={{ marginRight: 2 }} />

        </Typography>
                <Typography variant='h6'>50% decrease in direct mail volume</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Issuers experienced a stark slowdown in direct mail volume this year.
        </Typography>
        <br/>
        <Button size='small' variant='contained'>
          Compare subject lines
        </Button>

        </CardContent>
      </Box>
      <Divider flexItem />

      <Box sx={{ width: '100%' }}>
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
                <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
                      <ChartLine sx={{ marginRight: 2 }} />
        </Typography>
                <Typography variant='h6'>New REI Co-Op Capital One Credit Card</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          CapOne launched a new card in partnership with REI encouraging outdoor activities.
        </Typography>
        <br/>
        <Button size='small' variant='contained'>
          Compare subject lines
        </Button>

        </CardContent>
      </Box>

       <Divider flexItem />

      <Box sx={{ width: '100%' }}>
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
                <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
                      <Twitter sx={{ marginRight: 2 }} />
        </Typography>
                <Typography variant='h6'>Halle Bailey for Chase Saphire</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Chase recently launched a new campaign with celebrity Halle Bailey to prepare for their deal.
        </Typography>
        <br/>
        <Button size='small' variant='contained'>
          Compare subject lines
        </Button>

        </CardContent>
      </Box>

    </Card>
  )
}

export default DepositWithdraw
