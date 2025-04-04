import './App.css'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Background from "./assets/bg3.jpg"
import { genMember } from './genmember'

function App() {

  return (

    <div className='flex flex-col justify-center gap-12 bg-cover bg-center min-h-screen p-4' style={{backgroundImage: `url(${Background})`}}>
      <div>
        <h1 className='text-center text-white text-8xl font-extrabold'>GenMate B</h1>
      </div>
      <div className='flex flex-wrap gap-8 justify-center'>
        {genMember.map((gmember) => (
          <Card key={gmember.id} className='border border-black'>
            <h2 className='text-center text-4xl font-bold'>{gmember.name}</h2>
            <img src={gmember.image} className='w-88 h-88 mx-8 rounded-2xl'/>
            <Button className='mx-4'>{gmember.name} Info</Button>
          </Card>
        ))}
      </div>
    </div>

    // <div className='flex flex-wrap gap-4 p-4 bg-amber-100 h-screen'>
    //   {aespaMembers.map((member) =>(
    //     <Card key={member.id} className='w-[600px] h-[600px] p-4' >
    //       <img src={member.image} className='w-full h-72' />

    //       <Button>{member.name}</Button>
    //     </Card>

    //   ))}

    // </div>
  )
}

export default App
