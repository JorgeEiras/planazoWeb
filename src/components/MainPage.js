import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Content4 from './Content4'
import Content5 from './Content5'
import Content6 from './Content6'
import Content7 from './Content7'
import Content8 from './Content8'

const MainPage = () => {
  return (
    <React.Fragment>
        <section>
            <div>
                <div className='content1'>
                    <Content1/>
                </div>
                <div className='content2'>
                    <Content2/>
                </div>
                <div className='content3'>
                    <Content3/>
                </div>
                <div className='content4'>
                    <Content4/>
                </div>
                <div className='content5'>
                    <Content5/>
                </div>
                <div className='content6'>
                    <Content6/>
                </div>
                <div className='content7'>
                    <Content7/>
                </div>
                <div className='content8'>
                    <Content8/>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default MainPage