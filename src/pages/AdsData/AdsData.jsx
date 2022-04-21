import React from 'react'
import {Tabs} from "antd"
import AdsList from './AdsList'
import AdsCalculate from './AdsCalculate'
const {TabPane} = Tabs

const AdsData = () => {
  return (
   <Tabs defaultActiveKey="1" centered>
   <TabPane tab="ADS List" key="1">
     <AdsList/>
   </TabPane>
   <TabPane tab="ADS Calculate" key="2">
        <AdsCalculate/>
   </TabPane>
 </Tabs>
  )
}

export default AdsData