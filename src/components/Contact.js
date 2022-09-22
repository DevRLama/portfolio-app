import React from 'react'
import {Link} from 'react-router-dom'



function Contact(props) {
  

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href ='resume.pdf';
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
}
  return (<> <div><h5>Contact Me:</h5></div><hr/>
   <div className='container'>
  <table className="table table-striped table-hover my-2" >
  <tbody>
    <tr style={{ border: "1px solid black", textAlign:"left" }}>
      {/* <th scope="row"></th> */}
      <td>Name :</td>
      <td>{props.userPersonal.Name}</td>
    </tr>
    <tr style={{ border: "1px solid black", textAlign:"left" }}>
    <td>Mobile Number :</td>
      <td>{props.userPersonal.MobileNo}</td>
    </tr>
    <tr style={{ border: "1px solid black", textAlign:"left" }}>
    <td>Email ID :</td>
      <td>{props.userPersonal.EmailId}</td>
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