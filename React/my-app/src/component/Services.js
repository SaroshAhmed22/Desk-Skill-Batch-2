import React from 'react'
import Data from './MyData'

const Services = () => {


    return (
        <div>
            <div className="row">
                {
                    Data.map((myData, index) => {
                        return (
                            <div className="col-md-3 col-12" key={index}>
                                <div className="card" >
                                    <img src={myData.image} className="card-img-top" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-title">{myData.heading}</h5>
                                        <p className="card-text">{myData.para}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>

        </div>
    )
}

export default Services