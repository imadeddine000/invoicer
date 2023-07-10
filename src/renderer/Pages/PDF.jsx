import React, { useEffect, useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import Printed from 'renderer/components/Printed';
import { useParams } from 'react-router-dom';

export const PDF = () => {
  const [itemToPrint, setitemToPrint] = useState({})
  window.electron.ipcRenderer.once('get-by-id',(arg)=>{
    setitemToPrint(arg[0])
   
  })
  const id=useParams().id
  useEffect(()=>{
    window.electron.ipcRenderer.sendMessage('get-by-id',id)
  },[])
  
  return (
    <div className='flex flex-col w-full pl-[14rem]  h-[100vh]'>
      <Printed itemToPrint={itemToPrint}/>
    </div>
  )
}
