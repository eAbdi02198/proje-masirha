import React, { useState } from 'react'
import './Addarticle.css'
import Mynavbar from '../components/Mynavbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function Addarticle() {
  const navigate = useNavigate()
  
  const [addarticleformdata, setAddarticleformdata] = useState({
    title: "",
    writter: "",
    desc: "",
    category: "",
    image: "",
    readingtime: ""
  })

  const addformhandler = (e) => {
    setAddarticleformdata({
      ...addarticleformdata,
      [e.target.name]: e.target.value
    })
  }

  const submitaddhandler = () => {
    Swal.fire({
      title: 'آیا مطمئنی؟',
      text: "می‌خوای این مقاله رو ثبت کنی؟",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'بله، ثبت کن',
      cancelButtonText: 'نه، برگرد به خانه',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost:3001/articles", addarticleformdata)
          .then(res => {
            Swal.fire(
              'موفق!',
              'مقاله با موفقیت ثبت شد.',
              'success'
            )
            navigate('/')
          })
          .catch(err => {
            Swal.fire(
              'خطا!',
              'مشکلی در ثبت مقاله به وجود آمد.',
              'error'
            )
          })
      } else {
        navigate('/')
      }
    })
  }

  return (
    <div>
      <Mynavbar />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>نام مقاله</Form.Label>
            <Form.Control type="text" value={addarticleformdata.title} onChange={addformhandler} name="title" />

            <Form.Label>نام نویسنده</Form.Label>
            <Form.Control type="text" value={addarticleformdata.writter} onChange={addformhandler} name="writter" />

            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control type="text" value={addarticleformdata.desc} onChange={addformhandler} name="desc" />

            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control type="text" value={addarticleformdata.category} onChange={addformhandler} name="category" />

            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control type="text" value={addarticleformdata.image} onChange={addformhandler} name="image" />

            <Form.Label>مدت زمان</Form.Label>
            <Form.Control type="text" value={addarticleformdata.readingtime} onChange={addformhandler} name="readingtime" />
          </Form.Group>

          <Button variant="primary" type="button" onClick={submitaddhandler}>
            ثبت مقاله
          </Button>
        </Form>
      </div>
    </div>
  )
}