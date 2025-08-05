import { useState } from 'react'
import Navbar from '../Component/Navbar'
import BlogCard from '../Component/BlogCard'



function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
     <Navbar/>
    <BlogCard/>
 </div>
  )
}

export default App
