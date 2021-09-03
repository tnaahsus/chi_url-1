import { React, useState,useEffect } from 'react'
import { Search } from './search'
import axios from 'axios';


const UserPage = () => {
    const [pagingStatus, setPagingstatus] = useState('');
    const [data, setdata] = useState([]);
    // const token = localStorage.getItem("token");
    
        useEffect(() => {
            const token1 = localStorage.getItem("token");
            axios.get('url-stats', {
                headers: {
                    'Authorization': `Bearer ${token1}`,
                    'accept': 'application/json'
                }
            })
                .then((resp) => {
                    console.log(resp.data.paging_state); //check the resp
                    if (resp.status === 200) {
                        setPagingstatus(resp.data.paging_state)
                        setdata(resp.data)
                    }

                })
                .catch((error) => {
                    console.error(error); //check the error
                })
        },[])

    const moreRequest = async (e) => {
        e.preventDefault();
        const token2 = localStorage.getItem("token");
        await axios.get(`url-stats/?paging_state=${pagingStatus}`
        ,
            {
                headers: {
                    'Authorization': `Bearer ${token2}`,
                    'accept': 'application/json',
                }
            })
            .then((resp) => {
                console.log(resp); //check the resp
                if (resp.status === 200) {
                setPagingstatus(resp.data.paging_state);
                setdata(resp.data)
                }

            })
            .catch((error) => {
                // console.error(error); //check the error
            })
    }


    // const columns = data[0] && Object.keys(data[0]);
    return (
        <div>
            <Search />
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Long Url</th>
                        <th scope="col">Shortened Url</th>
                        <th scope="col">Number of clicks</th>
                    </tr>
                </thead>
                <tbody>
                {/*{data.map(row =><tr>
                    {
                        columns.map(column=><td>{row[column]}</td>)
                    }
                </tr>)}*/}
                </tbody>
            </table>
            <button type="button" className="btn btn-link mt-2 d-grid mx-auto btn-lg" onClick={moreRequest}>More.</button>
        </div>
    )
}

export default UserPage