import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateContact() {
    let navigate=useNavigate()
    const [userPersonal, setuserPersonal] = useState({ EmailId: "", Name: "", MobileNo: ""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/resume/updateInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ EmailId: userPersonal.EmailId, Name: userPersonal.Name, MobileNo: userPersonal.MobileNo})

        })
        const json = await response.json();
        console.log(json);
        if (json.respCode===1) {
            // save the token and redirect to user page.
            navigate('/home');
            alert("Successfully Updated")
        } else {
                alert(json.error)           

        }

    }



    useEffect(() => {
        // call api for disconnection data
        async function fetchData() {
            // You can await here
            const response = await axios({

                // Endpoint to send files
                url: "http://localhost:8080/api/resume/allInfo",
                method: "GET",
                params: {
                    EmailId: localStorage.getItem('user')
                }

            })
            if (response.data.respCode === 1) {
                
                setuserPersonal(response.data.userPersonal)
                document.querySelector("#Name").value=response.data.userPersonal.Name
                document.querySelector("#EmailId").value=response.data.userPersonal.EmailId
                document.querySelector("#MobileNo").value=response.data.userPersonal.MobileNo


            } else {
                alert("Unable to fetch the data at this moment")
            }


        }
        fetchData()
    }, []);

    const onChange=(e)=>{
        setuserPersonal({...userPersonal,[e.target.id]:e.targe.value})
        console.log(userPersonal)
    }
    return (<>
        <div><h4>UpdateContact</h4><br></br></div>
        <div className='container'><form onSubmit={handleSubmit}>
            <table className="table table-striped table-hover my-2" >
                <tbody>
               
                    <tr style={{ border: "1px solid black", textAlign: "left" }}>
                        {/* <th scope="row"></th> */}
                        <td>Name :</td>
                        <td><input type="text" id="Name" onChange={onChange}></input></td>
                    </tr>
                    <tr style={{ border: "1px solid black", textAlign: "left" }}>
                        <td>Mobile Number :</td>
                        <td><input type="text" id="MobileNo"onChange={onChange}></input></td>
                    </tr>
                    <tr style={{ border: "1px solid black", textAlign: "left" }}>
                        <td>Email ID :</td>
                        <td><input type="text" id="EmailId"onChange={onChange}></input></td>
                    </tr>
                    <tr style={{ border: "1px solid black", textAlign: "left" }}>
                        <td><button type="submit" className='btn btn-primary'>Update</button></td>
                    </tr>
                    
                </tbody>

            </table>
            </form>
        </div></>
    )
}

export default UpdateContact