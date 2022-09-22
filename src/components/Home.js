import React ,{useEffect,useState} from 'react'
import Experience from './Experience'
import Recommendations from './Recommendations'
import Contact from './Contact'
import Skills from './Skills'
import axios from 'axios'


function Home() {

    const [userPersonal, setuserPersonal] = useState({EmailId: "",Name: "",MobileNo: "",Designation: "",Resume: ""})
    const [userRecomm, setuserRecomm] = useState({EmailId: "",RecommendBy: "",RecommenderComp: "",RecommenderJobTitle: "",ReferralDate: "",ReferralText:""})
    const [userExp, setuserExp] = useState({EmailId: "",CompName: "",JobTitle: "",JobDuration: "",Projectsdone: "",Achievements:""})


    // let user={Name:"George",MobileNo:"8454695874",EmailID:"test@gmail.com",path:"resume.pdf"}


    useEffect(() => {
        // call api for disconnection data
        async function fetchData() {
            // You can await here
            const response = await axios({

                // Endpoint to send files
                url: "http://localhost:8080/api/resume/allInfo",
                method: "GET",
                params: {
                    EmailId:localStorage.getItem('user')
                }

            })
            if (response.data.respCode === 1) {
                console.log(response.data)
                setuserPersonal(response.data.userPersonal)
                setuserRecomm(response.data.userRecomm)
                setuserExp(response.data.userExp)
                console.log(response.data.userExp)

            } else {
               alert("Unable to fetch the data at this moment")
            }


        }
        fetchData()      
    }, []);



    return (<>
        <div ><h3>User Portfolio</h3></div><hr />

        <div className="container text-center" >
            <div className="row">
                <div className="col-lg-3">
                    <div className="card text-center">
                        <img src='avatar.jpg' className="card-img-top mx-auto d-block" alt="..." style={{ borderRadius: "50%", padding: "20px", maxWidth: "289px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{userPersonal.Name}</h5>
                            <p className="card-text">{userPersonal.Designation}</p>
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

                                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0"><Contact userPersonal={userPersonal}/></div>
                                    <div className="tab-pane fade" id="search-tab-pane" role="tabpanel" aria-labelledby="search-tab" tabIndex="0"><Recommendations userRecomm={userRecomm}/></div>
                                    <div className="tab-pane fade" id="meeting-tab-pane" role="tabpanel" aria-labelledby="meeting-tab" tabIndex="0"><Experience userExp={userExp} /></div>
                                    
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