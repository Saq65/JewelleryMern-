import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, itemdecrement, RemoveToCart } from '../redux/cartslice/CartSlice';
import { BsPerson, BsTrash, BsTrash3Fill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Cartpage() {
    const { carts } = useSelector(state => state.allcart);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleincrement = (e) => {
        dispatch(addToCart(e))
    };

    const handledecrement = (e) => {
        dispatch(itemdecrement(e))
    }

    const handleremove = (e) => {
        dispatch(RemoveToCart(e))
    }

    const navigate = useNavigate();

    const handlePayNow = (e) => {
        if (user) {
            alert("coming soon")
        } else {
            navigate('/profile')
        }
    }

    return (
        <div className='container-fluid '>
            <div style={{ marginTop: '40px' }} className="row w-100 justify-content-center mx-auto">
                <div className="col-lg-3">
                    <div className='container'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <BsPerson size="52" />
                        </div>
                        <table className='table table-table hover'>
                            <tbody>
                                <tr>

                                    <th>
                                        Items in Cart <span >:</span>{" "}
                                        <span className="text-danger">{carts.length}</span>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        Total Price <span className="">:</span>{" "}
                                        <span className="text-danger">
                                            ₹{carts.reduce((total, item) => total + item.qnty * item.price, 0)}
                                        </span>
                                    </th>
                                </tr>
                            </tbody>

                        </table>
                        <div>
                            <button
                                className='paybtn'
                                onClick={handlePayNow}
                            >Pay Now</button>
                        </div>
                    </div>

                </div>
                <div className="col-lg-8">
                    <div id='section2'>
                        {
                            carts.length > 0 ? <div style={{ gap: '3vh', rowGap: '9vh' }} className='d-flex align-items-center justify-content- flex-wrap'>
                                {
                                    carts.map((itm, index) => (
                                        <div id='cartcard' className="card p-1">
                                            <div>
                                                <img
                                                    src={itm.images && itm.images.length > 0 ? itm.images[0] : "placeholder.jpg"}
                                                    style={{ objectFit: 'cover', height: '120px', width: '180px' }} alt="" className="img-fluid mx-auto" />
                                            </div>
                                            <div>
                                                <p id='cartproductname'>{itm.productName}</p>
                                                <div>
                                                    <p className="pricecart text-center">₹{itm.price}</p>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                {
                                                    itm.qnty > 0 ? <div id='btnofcart'>
                                                        <span style={{ width: '32%', cursor: 'pointer' ,fontSize:'22px'}} onClick={() => handledecrement(itm)} className='d-flex justify-content-center text-light'>-</span>
                                                        <span style={{ width: '32%', cursor: 'pointer' }} className='d-flex justify-content-center text-light'>{itm.qnty}</span>
                                                        <span style={{ width: '32%', cursor: 'pointer' }} onClick={() => handleincrement(itm)} className='d-flex justify-content-center text-light'>+</span>
                                                    </div> : <div style={{ gap: '10px' }} className='d-flex justify-content-center align-items-center w-75'>
                                                        <span onClick={() => handleremove(itm._id)}>

                                                            <BsTrash className='text-danger' size="23" />
                                                        </span>
                                                        <span style={{ width: '35%', borderRadius: '7px' }} onClick={() => handleincrement(itm)} className='bg-dark d-flex justify-content-center text-light'>+</span>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    ))
                                }

                            </div> : <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <h1 style={{ fontSize: '120px' }} className='text-center'><BsTrash3Fill className='text-danger' /></h1>
                                    <p className='text-center' style={{ fontWeight: 'bold' }}>Your cart is empty...</p>
                                    <p className='text-center' style={{ cursor: 'pointer', fontFamily: 'monospace' }} onClick={() => navigate('/')}>back to home</p>
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </div>


        </div>

    )
}

export default Cartpage