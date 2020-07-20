import React from 'react';
import Swal from 'sweetalert2';
import {
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { EditContact } from '../Redux/Action/ContactAction';

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    Swal.fire({
      title: 'Edit Contact',
      html:
        '<input name="firstName" class="swal2-input" placeholder="First Name" onChange={handleChange}>' +
        '<input name="lastName" class="swal2-input" placeholder="Last Name" onChange={handleChange}>'+
        '<input name="age" class="swal2-input" placeholder="Age" onChange={handleChange}>'+
        '<input name="photo" class="swal2-input" placeholder="Photo" onChange={handleChange}>',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Success!',
          'Your file has been edited.',
          'success'
        )
      }
      dispatch(
        EditContact()
      );
    })
  };

  return (
    <div key={props.key}>
      <Card className='box-glow' style={{textAlign: 'center', height: '400px'}}>
        <CardImg top width="100%" height="70%" src={props.image} alt="Image here" onClick={handleClick} style={{cursor:'pointer'}} />
        <CardBody>
          <CardTitle style={{fontWeight: '600', fontSize: '15px'}}>
            {`${props.firstname} ${props.lastname}`}
          </CardTitle>
          <CardText style={{fontSize: '15px', marginTop: '10px', marginBottom: '10px'}}>
            {props.age}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
