import React, { useState, useEffect } from 'react'
import './Article.css'
import Card from 'react-bootstrap/Card'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Mynavbar from '../components/Mynavbar'
import Swal from 'sweetalert2'

export default function Article() {
  const [articledatas, setArticledatas] = useState({})
  const param = useParams().id
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3001/articles/${param}`)
      .then((res) => {
        setArticledatas(res.data)
      })
      .catch(err => {
        console.error("خطا در دریافت مقاله:", err)
      })
  }, [param])

  const deletarticle = () => {
    Swal.fire({
      title: 'آیا مطمئنی؟',
      text: "این مقاله برای همیشه حذف میشه!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله، حذف کن',
      cancelButtonText: 'نه، بی‌خیالش',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/articles/${param}`)
          .then(() => {
            Swal.fire(
              'حذف شد!',
              'مقاله با موفقیت حذف شد.',
              'success'
            )
            navigate('/')
          })
          .catch(err => {
            Swal.fire(
              'خطا!',
              'حذف مقاله با خطا مواجه شد.',
              'error'
            )
            console.error(err)
          })
      }
    })
  }

  return (
    <div>
      <Mynavbar />
      <div className="page">
        <Card className='custom-card'>
          <Card.Img variant="top" src={articledatas.image} />
          <Card.Body>
            <Card.Title>{articledatas.title}</Card.Title>
            <Card.Text>
              {articledatas.writter} - {articledatas.readingtime} - {articledatas.category} - {articledatas.desc}
            </Card.Text>
            <button onClick={deletarticle}>حذف مقاله</button>
            <Link className='man'to={`/edditarticle/${param}`}>ویرایش مقاله</Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}