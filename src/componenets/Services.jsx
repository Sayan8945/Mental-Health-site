import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.png"
import serviceImg2 from "../assets/service2.png"
import serviceImg3 from "../assets/service3.png"
import serviceImg4 from "../assets/service4.png"

const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc] md:px-32'>
      <div className="container pt-28 px-4 mx-auto ">
        <div className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together</h2>
          <p className='md:w-1/2 mx-auto'>Life brings challenges, but you don’t have to face them alone. Together, we can work on strengthening relationships, improving communication, building resilience, and finding peace within.</p>
          {/* service category */}
          <Tabs>
            <TabList className="flex flex-wrap justify-evenly items-center md:gap-8 gap-4">
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-distructed</Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className='md-w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-2xl font-semibold text-primary mb-4'>Couple Counseling</h3>
                <p className='mb-8'>ff er erg ers gdgh rthrtw tqewrqrew trt uyti uyiuy jrt yer terq tery rt uty urt yrt ergdfh tf ujyu yikouryerter</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-2'>
                  <li >dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                  <li>dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                  <li>dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover md:h-[446px]'/>
              </div>
              </div>
            </TabPanel><TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className='md-w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-2xl font-semibold text-primary mb-4'>Parenting Skills</h3>
                <p className='mb-8'>ff er erg ers gdgh rthrtw tqewrqrew trt uyti uyiuy jrt yer terq tery rt uty urt yrt ergdfh tf ujyu yikouryerter</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-2'>
                  <li >dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                  <li >dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                  <li >dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg2} alt="" className='w-full h-auto rounded-2xl object-cover md:h-[446px]'/>
              </div>
              </div>
            </TabPanel><TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className='md-w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-2xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
                <p className='mb-8'>ff er erg ers gdgh rthrtw tqewrqrew trt uyti uyiuy jrt yer terq tery rt uty urt yrt ergdfh tf ujyu yikouryerter</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-2'>
                  <li>dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                  <li>dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                  <li>dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover md:h-[446px]'/>
              </div>
              </div>
            </TabPanel><TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className='md-w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-2xl font-semibold text-primary mb-4'>Self-distructed</h3>
                <p className='mb-8'>ff er erg ers gdgh rthrtw tqewrqrew trt uyti uyiuy jrt yer terq tery rt uty urt yrt ergdfh tf ujyu yikouryerter</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-2'>
                  <li>dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                  <li>dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                  <li>dasd dfs dsaf af afaw f aterg ergaedvx dsafref adstrg aereaw ferw</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover md:h-[446px]'/>
              </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
 
export default Services
