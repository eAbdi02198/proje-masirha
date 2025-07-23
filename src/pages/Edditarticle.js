import React, { useState, useEffect } from 'react'
import './Edditarticle.css'
import Mynavbar from '../components/Mynavbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edditarticle() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [edditarticledatas, setEdditarticledatas] = useState({
    title: "",
    writter: "",
    desc: "",
    category: "",
    image: "",
    readingtime: ""
  })

  useEffect(() => {
    axios.get(`http://localhost:3001/articles/${id}`)
      .then((res) => {
        setEdditarticledatas(res.data)
      })
      .catch((err) => {
        console.error("خطا در دریافت مقاله برای ویرایش:", err)
      })
  }, [id])

  const edditformdata = (e) => {
    setEdditarticledatas({
      ...edditarticledatas,
      [e.target.name]: e.target.value
    })
  }

  const submiteddithandler = () => {
    Swal.fire({
      title: 'ثبت تغییرات؟',
      text: "آیا می‌خوای مقاله ویرایش بشه؟",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'بله، ذخیره کن',
      cancelButtonText: 'نه، بی‌خیال',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.put(`http://localhost:3001/articles/${id}`, edditarticledatas)
          .then(() => {
            Swal.fire('ثبت شد!', 'تغییرات با موفقیت ذخیره شد.', 'success')
            navigate('/')
          })
          .catch((err) => {
            Swal.fire('خطا!', 'ذخیره مقاله با خطا مواجه شد.', 'error')
            console.error(err)
          })
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
            <Form.Control type="text" value={edditarticledatas.title} onChange={edditformdata} name="title" />

            <Form.Label>نام نویسنده</Form.Label>
            <Form.Control type="text" value={edditarticledatas.writter} onChange={edditformdata} name="writter" />

            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control type="text" value={edditarticledatas.desc} onChange={edditformdata} name="desc" />

            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control type="text" value={edditarticledatas.category} onChange={edditformdata} name="category" />

            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control type="text" value={edditarticledatas.image} onChange={edditformdata} name="image" />

            <Form.Label>مدت زمان</Form.Label>
            <Form.Control type="text" value={edditarticledatas.readingtime} onChange={edditformdata} name="readingtime" />
          </Form.Group>

          <Button variant="primary" type="button" onClick={submiteddithandler}>
            ثبت تغییرات
          </Button>
        </Form>
      </div>
    </div>
  )
}