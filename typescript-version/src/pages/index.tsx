// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import Twitter from 'mdi-material-ui/Twitter'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import LineChart from 'src/views/dashboard/LineChart'
import StackedChart from 'src/views/dashboard/StackedChart'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

import CardImgTop from 'src/views/cards/CardImgTop'
import CardWithCollapse from 'src/views/cards/CardWithCollapse'
import CardUser from 'src/views/cards/CardUser'
import CardFacebook from 'src/views/cards/CardFacebook'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'


const Dashboard = () => {
  return (
    <ApexChartWrapper>

<br/>
<h1>What's Happening In Co-Branded Credit Cards?</h1>
<br/>

       <Grid container spacing={6} >
       <Grid item container spacing={3} direction="column" md={3}>
        <Grid item xs={12} md={3}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={3}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={3}>
          <Trophy />
        </Grid>
       </Grid>
       <Grid item container spacing={6} direction="column"  md={7}>
        <Grid item xs={12} md={4}>
          <DepositWithdraw />
        </Grid>
        <Grid item container spacing={6} direction="row"  md={7}>
            <Grid item xs={12} md={8} lg={6}>
              <WeeklyOverview />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <TotalEarning />
            </Grid>
        </Grid>
       </Grid>
      <Grid item container spacing={3} direction="column"  md={2}>
          <Grid item xs={2} md={3}>
             <CardStatisticsVerticalComponent stats='$25.6k' icon={<Poll />} trendNumber='+42%' title='Capital One' subtitle='Financial Services' />
          </Grid>
          <Grid item xs={2} md={2}>
            <CardFacebook/>
         </Grid>
          <Grid item xs={2} md={3}>
             <CardStatisticsVerticalComponent stats='$25.6k' icon={<Poll />} trendNumber='+42%' title='Capital One' subtitle='Financial Services' />
          </Grid>
           <Grid item xs={2} md={3}>
             <CardStatisticsVerticalComponent stats='$25.6k' icon={<Poll />} trendNumber='+42%' title='Capital One' subtitle='Financial Services' />
          </Grid>
       </Grid>
       </Grid>
<br/>
<br/>
<br/>
<br/>
       <Grid item container spacing={3} direction="row" md={12}>
               <Grid item xs={12}>
          <TableStickyHeader   />
        </Grid>
       </Grid>
<br/>
<br/>
       <Grid item container spacing={3} direction="row" md={12}>

      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Basic Cards</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardUser />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardWithCollapse />
      </Grid>


        </Grid>

<br/>
<br/>
<br/>
       <Grid container spacing={6}>
        <Grid item xs={12} md={3}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={7}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={6} md={2}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Twitter />}
                trendNumber='+42%'
                title='Capital One'
                subtitle='Financial Services'
              />
        </Grid>
        <Grid item xs={12} md={3}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LineChart />
        </Grid>
         <Grid item xs={12} md={6} lg={4}>
          <StackedChart />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TotalEarning />
        </Grid>
        <Grid item xs={6} md={2}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                trendNumber='+42%'
                title='Capital One'
                subtitle='Financial Services'
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Capital One'
                subtitle='Financial Services'
              />
            </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Capital One'
                subtitle='Financial Services'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Chase'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Financial Services'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>

    </ApexChartWrapper>
  )
}

export default Dashboard
