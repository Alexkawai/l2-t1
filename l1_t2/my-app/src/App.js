
import React, { useState } from "react";
import './App.css';
import {Header, Layout, Input, Button} from 'antd';
import 'antd/dist/antd.css';



const  App = () =>   {
  const [state, setState] = useState({ answer: 0 })
  return (
    
    <Layout style={{ alignContent: 'centre', marginTop: 200 }}>
      <br></br>
      <header>Задайте число для получения суммы n первых натуральных чисел</header>
      <Layout>
        <br></br>
        <Input.Group compact>
          <Input id="n" style={{ width: '20%' }} />
          <Button type="primary" onClick={() => getSumm(setState)}>Submit</Button>
        </Input.Group>
        <br></br>
        <div><span>Ответ = </span>{state.answer}</div>
      <br></br>
      </Layout>
    </Layout>
  );
}

const getSumm = setState => {
  var n = document.getElementById('n').value;
  var x = n++
  setState({ answer: (n*x)/2 })
}

export default App;


