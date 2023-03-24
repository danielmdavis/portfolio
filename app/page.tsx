'use client'
import { useAppContext } from './state'

export default function Home() {

  let globalState = useAppContext()
  const setContext = (scheme: string) => { globalState.palate = scheme }
  // console.log(globalState.palate)

  return (
    <div className='main'>
      <div style={{ height: '160px' }}/>
      <div className='main-inner'> 
        <div className='button-box'>
          <span className='button' onMouseEnter={ () => {setContext('light')} } onMouseLeave={ () => {setContext('dark')} }>resume</span>
          <span className='button' onMouseEnter={ () => {setContext('light')} } onMouseLeave={ () => {setContext('dark')} }>github</span>
          <span className='button' onMouseEnter={ () => {setContext('light')} } onMouseLeave={ () => {setContext('dark')} }>linkedin</span>
          <span className='button' onMouseEnter={ () => {setContext('light')} } onMouseLeave={ () => {setContext('dark')} }>highlights</span>
        </div>
        <div className='title-box'>
          <span className='ready'>looking for your next&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <div className='inner-title-box'>
            <div className='more1'>developer</div><span className='more2'>&nbsp;?</span>
          </div>
        </div>
      </div>
    </div>
  )
}
