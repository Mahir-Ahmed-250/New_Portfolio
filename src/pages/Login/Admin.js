import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import AboutUpdate from './AboutUpdate';
import useFirebase, { db } from './useFirebase';
const Admin = () => {
    const { logOut } = useFirebase()
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [code, setCode] = useState('');
    const [backendCode, setBackendCode] = useState('');
    const [technology1, setTechnology1] = useState('');
    const [technology2, setTechnology2] = useState('');
    const [technology3, setTechnology3] = useState('');
    const [technology4, setTechnology4] = useState('');
    const [technology5, setTechnology5] = useState('');
    const [techColor1, setTechColor1] = useState('');
    const [techColor2, setTechColor2] = useState('');
    const [techColor3, setTechColor3] = useState('');
    const [techColor4, setTechColor4] = useState('');
    const [techColor5, setTechColor5] = useState('');

    const handleName = event => {
        const result = event.target.value;
        setName(result)
    }
    const handleSite = event => {
        const result = event.target.value;
        setLink(result)
    }
    const handleCode = event => {
        const result = event.target.value;
        setCode(result)
    }
    const handleBackendCode = event => {
        const result = event.target.value;
        setBackendCode(result)
    }
    const handleTechnology1 = event => {
        const result = event.target.value;
        setTechnology1(result)
    }
    const handleColor1 = event => {
        const result = event.target.value;
        setTechColor1(result)
    }
    const handleTechnology2 = event => {
        const result = event.target.value;
        setTechnology2(result)
    }
    const handleColor2 = event => {
        const result = event.target.value;
        setTechColor2(result)
    }
    const handleTechnology3 = event => {
        const result = event.target.value;
        setTechnology3(result)
    }
    const handleColor3 = event => {
        const result = event.target.value;
        setTechColor3(result)
    }
    const handleTechnology4 = event => {
        const result = event.target.value;
        setTechnology4(result)
    }
    const handleColor4 = event => {
        const result = event.target.value;
        setTechColor4(result)
    }
    const handleTechnology5 = event => {
        const result = event.target.value;
        setTechnology5(result)
    }
    const handleColor5 = event => {
        const result = event.target.value;
        setTechColor5(result)
    }
    const onClickCreate = async () => {
        try {
            if (name.trim().length !== 0 && link.trim().length !== 0 && code.trim().length !== 0 && technology1.trim().length !== 0 && technology2.trim().length !== 0 && technology3.trim().length !== 0) {

                await addDoc(collection(db, 'projects'), {
                    Project_Name: name,
                    Project_Link: link,
                    Project_Code: code,
                    Project_Code_Backend: backendCode,
                    Technology1: technology1,
                    Technology2: technology2,
                    Technology3: technology3,
                    Technology4: technology4,
                    Technology5: technology5,
                    TechColor1: techColor1,
                    TechColor2: techColor2,
                    TechColor3: techColor3,
                    TechColor4: techColor4,
                    TechColor5: techColor5
                })
                setLink('');
                setName('')

                swal("Well Done!", "You have successfully added a project!", "success", {
                    buttons: {
                        cancel: "Cancel",
                        catch: {
                            text: "Go to Project",
                            value: "catch",
                        },
                    },
                })
                    .then((value) => {
                        switch (value) {
                            case "catch":

                                window.location.href = '/projects'

                                break;
                            default: ;
                        }
                    });

            }

            else {
                alert("Please fill-up all fields!")
            }
        }
        catch (error) {
            console.log('error--->', error)
        }


    }
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        //create the query
        const q = query(collection(db, 'projects'))
        //create listener
        const notesListenerSubscription = onSnapshot(q, (querySnapShot) => {
            const list = []
            querySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setProjects(list)
        })
        return notesListenerSubscription;
    }, [])

    const onPressDelete = async (project) => {
        console.log(project)
        try {
            deleteDoc(doc(db, 'projects', project.id))
        }
        catch (err) {
            console.log('err--->', err)
        }
    }

    const onPressDeleteMsg = (project) => {
        swal("Delete Warning!", "Do you really want to Delete this Project?", "warning", {
            buttons: {
                cancel: "NO",
                catch: {
                    text: "YES",
                    value: "catch",
                },
            },
        })
            .then((value) => {
                switch (value) {
                    case "catch":
                        onPressDelete(project)
                        swal("Success!", "You have successfully Delete the Project!", "success");
                        break;
                    default: ;
                }
            });
    }
    const [about, setAbout] = useState([])
    useEffect(() => {
        fetch(`https://firestore.googleapis.com/v1/projects/portfolio-a3ff3/databases/(default)/documents/aboutMe`)
            .then((res) => res.json())
            .then((data) => setAbout(data));

    }, [])
    console.log(about.documents)


    return (
        <div style={{ margin: "50px" }}>
            <button onClick={logOut} className="btn project-button" >logout</button>
            <hr />
            <div style={{ border: "1px solid black", padding: "25px" }}>
                <h3>Add a new Project</h3>
                <input placeholder="Project Name"
                    onChange={handleName}

                    required />
                <input placeholder="Project Link"
                    onChange={handleSite}
                    required />

                <input placeholder="Project Code"
                    onChange={handleCode}
                    required />
                <input placeholder="Project Backend Code"
                    onChange={handleBackendCode}
                    required />

                <div >
                    <input placeholder="1. Technology Used"
                        onChange={handleTechnology1}
                        required />
                    <input style={{ width: 100 }} type="text" placeholder="Color Code" onChange={handleColor1} id="" />
                </div>
                <div >
                    <input placeholder="2. Technology Used"
                        onChange={handleTechnology2}
                        required />
                    <input style={{ width: 100 }} type="text" placeholder='Color Code' onChange={handleColor2} name="" id="" />
                </div>
                <div>
                    <input s placeholder="3. Technology Used"
                        onChange={handleTechnology3}
                        required /> <br />
                    <input style={{ width: 100 }} type="text" placeholder='Color Code' onChange={handleColor3} name="" id="" />
                </div>
                <div>
                    <input placeholder="4. Technology Used"
                        onChange={handleTechnology4}
                        required />
                    <input style={{ width: 100 }} type="text" placeholder="Color Code" onChange={handleColor4} name="" id="" />
                </div>
                <div>
                    <input placeholder="5. Technology Used"
                        onChange={handleTechnology5}
                        required />
                    <input style={{ width: 100 }} type="text" placeholder="Color Code" onChange={handleColor5} name="" id="" />
                </div>


                <button onClick={onClickCreate} className="btn project-button" >Create</button>
            </div>
            <hr />
            <div style={{ border: "1px solid black", padding: "25px" }}>
                <h3>Delete a Project</h3>
                {
                    projects.map(project => <div style={{ display: "flex" }} key={project.Project_Name} >

                        <h4 style={{ marginRight: "20px" }}>{project.Project_Name}</h4> <button className="btn project-button" onClick={() => onPressDeleteMsg(project)}>Delete</button>
                    </div>)
                }
            </div>
            <hr />
            <div style={{ border: "1px solid black", padding: "25px" }}>
                <h3>About Me</h3>

                {
                    about.documents?.map(abt => <AboutUpdate abt={abt} key={abt.id} />

                    )
                }



            </div>
        </div>
    );
};

export default Admin;