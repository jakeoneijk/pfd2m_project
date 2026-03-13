import React from 'react'

import { paperContent } from './Config/PaperContent'
import fig from './Source/image/Fig1.png'

import Title from './Component/Title'
import AudioTable from './Source/AudioTable'
import Section from './Component/Section'

const style = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center' as 'center',
}

const iframeContainerStyle = {
  paddingTop: '50px',
}

function App() {
  return (
    <div className='App' style={style}>
      <Title />
      <div style={iframeContainerStyle}>
        <iframe
          width='640'
          height='400'
          src='https://www.youtube.com/embed/8ESg45dEBSs?si=I7UcBj0qac1k9Q91'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      
      <Section name='Abstract' content={paperContent.abstract} />
      <div style={{ margin: 'auto' }}>
        <img style={{ width: '400px', padding: '40px' }} src={fig} />
      </div>
      <AudioTable audioType='Multiple human dancers' />
      <AudioTable audioType='Single human dancer' />
      <AudioTable audioType='Multiple non-human dancers' />
      <AudioTable audioType='Single non-human dancer' />
      <Section
        name='References'
        content={paperContent.reference
          .map((item, index) => `[${index + 1}] ${item}`)
          .join(' \n ')}
      />
    </div>
  )
}

export default App
