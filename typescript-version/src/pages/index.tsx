// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table2 from 'src/views/dashboard/Table2'

import Trophy from 'src/views/dashboard/Trophy'
import Trophy2 from 'src/views/dashboard/Trophy2'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import LineChart from 'src/views/dashboard/LineChart'
import StackedChart from 'src/views/dashboard/StackedChart'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'

import SalesByCountries from 'src/views/dashboard/SalesByCountries'

import CardImgTop from 'src/views/cards/CardImgTop'
import CardWithCollapse from 'src/views/cards/CardWithCollapse'
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
          <Trophy2 />
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
<h1>Compare key features and benefits for co-branded credit cards</h1>
<br/>
       <Grid item container spacing={3} direction="row" md={12}>
               <Grid item xs={12}>
          <TableStickyHeader   />
        </Grid>
       </Grid>
<br/>
<br/>

<h1>Featured Campaigns and Messaging</h1>
<br/>
       <Grid item container spacing={3} direction="row" md={12}>
         <Grid item container spacing={3} direction="column" md={6}>
             <Grid item container spacing={3} direction="row">
                <Grid item md={4}>
                  <CardStatisticsVerticalComponent stats='$25.6k' icon={<Poll />} trendNumber='+42%' title='Capital One' subtitle='Financial Services' />
                </Grid>
                <Grid item md={3}>
                  <CardStatisticsVerticalComponent stats='$25.6k' icon={<Poll />} trendNumber='+42%' title='Capital One' subtitle='Financial Services' />
                </Grid>
                <Grid item md={5}>
                  <CardStatisticsVerticalComponent stats='$25.6k' icon={<Poll />} trendNumber='+42%' title='Capital One' subtitle='Financial Services' />
                </Grid>
             </Grid>
             <Grid item container spacing={3} direction="row">
                <Grid item md={6}>
                    <CardStatisticsVerticalComponent stats='$25.6k' icon={<Poll />} trendNumber='+42%' title='Capital One' subtitle='Financial Services' />
                </Grid>
                <Grid item md={6}>
                    <CardStatisticsVerticalComponent stats='$25.6k' icon={<Poll />} trendNumber='+42%' title='Capital One' subtitle='Financial Services' />
                </Grid>
             </Grid>

         </Grid>
       <Grid item container spacing={3} direction="column" md={6}>
          <Grid item container spacing={3} direction="row">
             <Grid item md={6}>
                 <CardStatisticsVerticalComponent stats='$25.6k' icon={<Poll />} trendNumber='+42%' title='Capital One' subtitle='Financial Services' />
             </Grid>
             <Grid item md={6}>
                 <CardStatisticsVerticalComponent stats='$25.6k' icon={<Poll />} trendNumber='+42%' title='Capital One' subtitle='Financial Services' />
             </Grid>
          </Grid>
          <Grid item container spacing={3} direction="row">
            <Grid item md={12}>
              <Trophy   />
            </Grid>
          </Grid>
        </Grid>
       </Grid>
<br/>
<br/>
<h1>How Competitors are Marketing</h1>
<br/>
       <Grid item container spacing={3} direction="row" md={12}>

        <Grid item xs={12} md={6} lg={6}>
          <LineChart />
        </Grid>
         <Grid item xs={12} md={6} lg={6}>
          <StackedChart />
        </Grid>
        </Grid>
<br/>
<br/>
<br/>
      <Grid item container spacing={3} direction="row" md={12}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Top Insight for Marketing Managers</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardWithCollapse />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardWithCollapse />
      </Grid>
   </Grid>

<br/>
<br/>
<br/>
      <Grid item container spacing={3} direction="row" md={12}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Recommended Downloads</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Table2 />
      </Grid>
      </Grid>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
       <Grid container spacing={6}>




        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <StatisticsCard />
        </Grid>


      </Grid>

    </ApexChartWrapper>
  )
}

export default Dashboard
