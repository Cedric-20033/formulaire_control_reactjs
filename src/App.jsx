import { useState } from 'react'
import { Input } from './composants/forms/Input'
import { Select } from './composants/forms/select'
import './app.css'
import { Textarea } from './composants/forms/textarea'
import { Button } from './composants/forms/button'

function App() {
  const [phone, setPhone] = useState('')
  const [value, setValue] = useState('')
  const option = ['direct', 'indirect', 'null']

  const [selectTarget, setTaget] = useState('')
  const [source, setSource] = useState('')
  const option2 = ['custom', 'no custom', 'null']

  const  [functionParam, setFunctionParam] = useState('')
  const  [functionBody, setFunctionBody] = useState('')

  const [masque1, setMasque1] = useState(false)
  const [masqueValue1, setMasqueValue1] = useState('-')

  const [masque2, setMasque2] = useState(false)
  const [masqueValue2, setMasqueValue2] = useState('-')

  const [masque3, setMasque3] = useState(false)
  const [masqueValue3, setMasqueValue3] = useState('-')


  return (
    <>
    <div className="container">
      <h1 className='mt-3 rounded text-center'>FORMULAIRE CONTROLE PAR REACTJS</h1>
      <input type="button" className='btn btn-outline-secondary mt-2 offset-11 rounded-pill' value={masqueValue1} onClick={() => {
        setMasque1(!masque1)
        setMasqueValue1(masque1 ? '-' : '+')
      }}/>
      
      <Part1 phone={phone} value={value} setPhone={setTaget} setValue={setValue} masque1={masque1} option={option}/>

      <input type="button" className='btn btn-outline-secondary mt-2 offset-11 rounded-pill' value={masqueValue2} onClick={() => {
        setMasque2(!masque2)
        setMasqueValue2(masque2 ? '-' : '+')
      }}/>

      <Part2 selectTarget={selectTarget} source={source} setTaget={setPhone} setSource={setSource} masque2={masque2} option={option2}/>


      <input type="button" className='btn btn-outline-secondary mt-2 offset-11 rounded-pill' value={masqueValue3} onClick={() => {
        setMasque3(!masque3)
        setMasqueValue3(masque3 ? '-' : '+')
      }}/>

      <Part3 functionParam={functionParam} functionBody={functionBody} setFunctionParam={setFunctionParam} setFunctionBody={setFunctionBody} masque3={masque3}/>

      <Part4/>
    </div>
      
    </>
  )
}

//composant part1
function Part1({phone, value, setPhone, setValue, masque1, option}){
  return <div className="row mb-5" hidden={masque1}>
    <Input type="text" placeholder="phone"  label="*Target:" onChange={setPhone} value={phone}/>

    <Input type="text" placeholder="phone." value={value} label="*Value:" onChange={setValue}/>

    <Select placeholder="type" label="*Type:" option={option}/>
  </div>
}

//composant part2
function Part2({selectTarget, source, setTaget, setSource, masque2, option}){

  return <div className="row mb-5" hidden={masque2}>
    <Input type="text" placeholder="phone..." label="*Target:" onChange={setTaget} value={selectTarget}/>

    <Input type="text" placeholder="phone.." value={source} label="*Source(s):" onChange={setSource}/>

    <Select placeholder="type."  label="*Type:" option={option}/>
  </div>

}

//composant part3
function Part3({functionParam, functionBody, setFunctionParam, setFunctionBody, masque3}){
  
  return <div hidden={masque3}>
    <div className="row mb-5 d-flex">
      <Input type="text" placeholder="Set function parameters" label="*Function parameters:" onChange={setFunctionParam} value={functionParam}/>
    </div>

    <div className="row mb-5">
      <Textarea placeholder="define code" label="*Functions body:" onChange={setFunctionBody} value={functionBody}/>
    </div>
  </div>
}

//composant part4
function Part4(){

  return <div className="row mb-5">
    <Button value="boutton"/>
  </div>
  
}

export default App
