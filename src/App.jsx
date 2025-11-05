import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import VerticalTimelineAccordion from './Accordian'
import VerticalTimelineAccordion2 from './Accordian/Accordian2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <VerticalTimelineAccordion /> */}
      <VerticalTimelineAccordion2 />
    </>
  )
}

export default App
