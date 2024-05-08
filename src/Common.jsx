import React from 'react'
import { NavLink } from 'react-router-dom'
const Common = (props) => {
    return (
        <>
            <section id="header" className="header">
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-11 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 left">
                                    <h1> {props.name}  <strong className='brand-name'>CodeWitharsh</strong></h1>
                                    <h2 className='my-3'>We are the team of talented developer making websites</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className='button'> {props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} width={700} height={700} className='image-fluid animated' alt="homeimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common
