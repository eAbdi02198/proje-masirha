import React from 'react'
import './Articleitem.css'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Articleitem({id,title,image,readingtime,category,writter,desc}) {
  return (
    <Card >
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
    {writter}-{readingtime}-{category}-{desc}
      </Card.Text>
<Link to={`/article/${id}`}className='mani'>ادامه مقاله</Link>
    </Card.Body>
  </Card>
  )
}
