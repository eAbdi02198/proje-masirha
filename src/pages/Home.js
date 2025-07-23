import React, { useEffect, useState } from 'react'
import './Home.css'
import Mynavbar from '../components/Mynavbar'
import axios from 'axios'
import { Col, Collapse, Container, Row } from 'react-bootstrap'
import Articleitem from './Articleitem'
import Footer from '../components/Footer'
export default function Home() {
    let[hominfos,setHomeinfos]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/articles").then((res)=>{
setHomeinfos(res.data)
        })
    },[])
  return (
    <div>
      <Mynavbar></Mynavbar>
      <Container>
        <Row className='row-cols-1 row-cols-md-4 g-4 p-4'>
            {hominfos.map(hominfo=>{
                return <Col key={hominfo.id}>
                <Articleitem {...hominfo}></Articleitem>
                </Col>
            })}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}
