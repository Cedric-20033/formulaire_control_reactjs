import { useState } from 'react'
import { Input } from './composants/forms/Input'
import { Select } from './composants/forms/select'
import './app.css'

function App() {
  const [phone, setPhone] = useState('')
  const [value, setValue] = useState('')
  const option = ['direct', 'indirect', 'null']

  const [selectTarget, setTaget] = useState('')
  const [source, setSource] = useState('')
  const option2 = ['custom', 'no custom', 'null']

  const [masque1, setMasque1] = useState(false)
  const [masqueValue1, setMasqueValue1] = useState('-')

  const [masque2, setMasque2] = useState(false)
  const [masqueValue2, setMasqueValue2] = useState('-')

  return (
    <>
    <div className="container">
      <h1 className='mt-3 rounded text-center'>FORMULAIRE CONTROLE PAR REACTJS</h1>
      <input type="button" className='btn btn-primary mt-2 offset-11' value={masqueValue1} onClick={() => {
        setMasque1(!masque1)
        setMasqueValue1(masque1 ? '-' : '+')
      }}/>
      
      <Part1 phone={phone} value={value} setPhone={setTaget} setValue={setValue} masque1={masque1} option={option}/>

      <input type="button" className='btn btn-primary mt-2 offset-11' value={masqueValue2} onClick={() => {
        setMasque2(!masque2)
        setMasqueValue2(masque2 ? '-' : '+')
      }}/>

      <Part2 selectTarget={selectTarget} source={source} setTaget={setPhone} setSource={setSource} masque2={masque2} option={option2}/>
    </div>
      
    </>
  )
}

//composant part1
function Part1({phone, value, setPhone, setValue, masque1, option}){
  return <div className="row mb-5" hidden={masque1}>
    <Input type="text" placeholder="phone" value={phone} label="*Target:" onChange={setPhone}/>

    <Input type="text" placeholder="phone." value={value} label="*Value:" onChange={setValue}/>

    <Select placeholder="type" label="*Type:" option={option}/>
  </div>
}

//composant part2
function Part2({selectTarget, source, setTaget, setSource, masque2, option}){

  return <div className="row mb-5" hidden={masque2}>
    <Input type="text" placeholder="phone..." value={selectTarget} label="*Target:" onChange={setTaget}/>

    <Input type="text" placeholder="phone.." value={source} label="*Source(s):" onChange={setSource}/>

    <Select placeholder="type."  label="*Type:" option={option}/>
  </div>

}

export default App
