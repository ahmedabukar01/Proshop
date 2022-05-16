import {Link, useParams} from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';

const ProductScreen = () => {
    const params = useParams();
    const product = products.find(product => product._id === params.id)
  return (
    <div>{product.name}</div>
  )
}

export default ProductScreen