import React from 'react'
import {Link} from 'react-router-dom'



function Contact(props) {
  let path=props.user.path

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(path).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href =path;
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
}
  return (<> <div><h5>Contact Me:</h5></div><hr/>
   <div className='container'>
    {console.log(props)}
  <table className="table table-striped table-hover my-2" >
  <tbody>
    <tr style={{ border: "1px solid black", textAlign:"left" }}>
      {/* <th scope="row"></th> */}
      <td>Name :</td>
      <td>{props.user.Name}</td>
    </tr>
    <tr style={{ border: "1px solid black", textAlign:"left" }}>
    <td>Mobile Number :</td>
      <td>{props.user.MobileNo}</td>
    </tr>
    <tr style={{ border: "1px solid black", textAlign:"left" }}>
    <td>Email ID :</td>
      <td>{props.user.EmailID}</td>
    </tr>
    <tr style={{ border: "1px solid black", textAlign:"left" }}>
    <td>Resume :</td>
      <td><Link to="#" onClick={onButtonClick}>Resume<i className="bi bi-file-pdf"></i></Link></td>
    </tr>
  </tbody>
 
  </table>
  </div>
  
  </>
   
  )
}

export default Contact