import React, { useState } from 'react'
import pizzas from '../pizzasdata'
import Pizza from '../components/Pizza'
import Loading from '../components/Loading'
// import { Modal } from 'react-bootstrap'

export default function Homescreen() {
    // const [quantity, setquantity] = useState(1)
    // const [varient, setvarient] = useState("Small")
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        // <div>
        //     {pizzas.map((Pizzaz) => <li>{Pizzaz.name}</li>)}
        // </div>

        <div>

            <div className='row justify-content-center'>
                {/* {Loading ? (
                    <Loading />
                // ) : error ? (
                //     <h1>Something went wrong</h1>
                ) : (
                    pizzas.map((Pizzaz) => {
                        return <div className='col-md-4'>
                            <div>
                                <Pizza pizza={Pizzaz} />
                            </div>
                        </div>
                    })
                )
                } */}
                {pizzas.map((Pizzaz) => {
                    return <div className='col-md-4'>
                        <div>
                            <Pizza pizza={Pizzaz} />
                        </div>
                    </div>
                })}
            </div>
        </div>

        // <div>

        //     <div className='row'>
        //         {pizzas.map((Pizzaz) => {
        //             return <div className='col-md-4'>
        //                 <div style={{ margin: '100px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>

        //                     <div onClick={handleShow}>
        //                     <h1>{Pizzaz.name}</h1>
        //                     {/* <li>{Pizzaz.image}</li> */}
        //                     <img src={Pizzaz.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />
        //                     </div>

        //                     <div className="flex-container">

        //                         <div className='w-100 m-1'>
        //                             <p>varients</p>
        //                             <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
        //                                 {Pizzaz.varients.map(varient => {
        //                                     return <option  value={varient}>{varient}</option>
        //                                 })}
        //                             </select>
        //                         </div>

        //                         <div className='w-100 m-1'>
        //                             <p>Quantity</p>
        //                             <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
        //                                 {[...Array(10).keys()].map((x, i) => {
        //                                     return <option value={i + 1}>{i + 1}</option>
        //                                 })}
        //                             </select>
        //                         </div>

        //                     </div>

        //                     <div className="flex-contrainer">
        //                         <div className='m-1 w-100'>
        //                             <h1 className='mt-1'>Price: {Pizzaz.prices[0][varient] * quantity} Rp/-</h1>
        //                         </div>
        //                         <div className='m-1 w-100'>
        //                             <button className="btn">ADD TO CART</button>
        //                         </div>
        //                     </div>


        //                     <Modal show={show}>
        //                     <Modal.Header closeButton>
        //                     <Modal.Title>{Pizzaz.name}</Modal.Title>
        //                     </Modal.Header>

        //                     <Modal.Body>
        //                         <img src={Pizzaz.image}/>
        //                     </Modal.Body>

        //                     <Modal.Footer>
        //                         <button className="btn" onClick={handleClose}>CLOSE</button>
        //                     </Modal.Footer>
        //                     </Modal>
        //                 </div>
        //             </div>
        //         })}
        //     </div>
        // </div>
    )
}