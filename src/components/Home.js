import React from 'react'
import Experience from './Experience'
import Recommendations from './Recommendations'
import Contact from './Contact'
import Skills from './Skills'


function Home(props) {
    let user={Name:"George",MobileNo:"8454695874",EmailID:"test@gmail.com",path:"resume.pdf"}
    return (<>
        <div ><h3>User Portfolio</h3></div><hr />

        <div className="container text-center" >
            <div className="row">
                <div className="col-lg-3">
                    <div className="card text-center">
                        <img src='avatar.jpg' className="card-img-top mx-auto d-block" alt="..." style={{ borderRadius: "50%", padding: "20px", maxWidth: "289px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.info}</p>
                        </div>

                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="card text-center">
                       
                    </div>
                    <div className="col-lg-12">
                        <div className="card text-center">
                            < div className="card-header">

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Skills</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="meeting-tab" data-bs-toggle="tab" data-bs-target="#meeting-tab-pane" type="button" role="tab" aria-controls="meeting-tab-pane" aria-selected="false" >Experience</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="search-tab" data-bs-toggle="tab" data-bs-target="#search-tab-pane" type="button" role="tab" aria-controls="search-tab-pane" aria-selected="false" >Recommendations</button>
                                    </li>
                                  
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact Me</button>
                                    </li>
                                  
                                    
                                    
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0"><Skills  /></div>

                                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0"><Contact user={user}/></div>
                                    <div className="tab-pane fade" id="search-tab-pane" role="tabpanel" aria-labelledby="search-tab" tabIndex="0"><Recommendations /></div>
                                    <div className="tab-pane fade" id="meeting-tab-pane" role="tabpanel" aria-labelledby="meeting-tab" tabIndex="0"><Experience /></div>
                                    
                                </div>

                            </div>
                        </div>


                    </div >

                </div>
            </div>
        </div>




    </>
    )
}

export default Home