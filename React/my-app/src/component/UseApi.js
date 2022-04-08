import React, { useState, useEffect } from 'react'

const UseApi = () => {

    const [userdata, setuserdata] = useState([])

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        // const mydata = await response.json();
        setuserdata(await response.json());
        // console.log(mydata)

    }

    useEffect(() => {
        getUsers();
    })


    return (
        <div>
            <div className='container'>

                <div className='row'>
                    {
                        userdata.map((data, index) => {

                            const { avatar_url, login, followers_url, repos_url } = data
                            return (
                                <div key={index} className="col-md-4 col-12 mt-3">
                                    <div class="card" >
                                        <img src={avatar_url} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{login}</h5>
                                            <p class="card-text">{followers_url}</p>

                                            <h3>Repos url : <span>{repos_url}</span></h3>

                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }


                </div>

            </div>



        </div>
    )
}

export default UseApi