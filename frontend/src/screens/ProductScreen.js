import {Link, useParams} from 'react-router-dom';
import { Row, Col, Button, Card, ListGroup, Image} from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';

const ProductScreen = () => {
    const params = useParams();
    const product = products.find(product => product._id === params.id)
  return (
    <>
        <Link className='btn btn-light my-3' to="/">
            Go Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen