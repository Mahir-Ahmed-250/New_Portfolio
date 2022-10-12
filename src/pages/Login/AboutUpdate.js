import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import swal from 'sweetalert';
import { db } from './useFirebase';

const AboutUpdate = (abt) => {
    const [img, setImg] = useState(abt.abt.fields.img.stringValue);
    const [comfortable, setComfortable] = useState(abt.abt.fields.comfortable.stringValue);
    const [familiar, setFamiliar] = useState(abt.abt.fields.familiar.stringValue);
    const [tools, setTools] = useState(abt.abt.fields.tools.stringValue);


    const handleImg = event => {
        const result = event.target.value;
        setImg(result)
    }
    const handleComfortable = event => {
        const result = event.target.value;
        setComfortable(result)
    }
    const handleFamiliar = event => {
        const result = event.target.value;
        setFamiliar(result)
    }
    const handleTools = event => {
        const result = event.target.value;
        setTools(result)
    }

    const onClickUpdate = async () => {

        const noteRef = doc(db, "aboutMe", "meXwCrZ3pGYClUOhUeqX")
        try {

            await updateDoc(noteRef, {
                img: img,
                comfortable: comfortable,
                familiar: familiar,
                tools: tools,
            })
            setImg(img);
            setComfortable(comfortable)
            setFamiliar(familiar);
            setTools(tools);

            swal("Well Done!", "You have successfully Updated the About!", "success", {
                buttons: {
                    cancel: "Cancel",
                    catch: {
                        text: "Go to home",
                        value: "catch",
                    },
                },
            })
                .then((value) => {
                    switch (value) {
                        case "catch":

                            window.location.href = '/home'

                            break;
                        default: ;
                    }
                });

        }

        catch (err) {
            console.log('err--->', err)

        }



    }
    return (
        <div>
            <input placeholder="Image Link"
                onBlur={handleImg}
                defaultValue={abt.abt.fields.img.stringValue}
                required />
            <input placeholder="Comfortable"
                onBlur={handleComfortable}
                defaultValue={abt.abt.fields.comfortable.stringValue}
                required />
            <input placeholder="Familiar"
                onBlur={handleFamiliar}
                defaultValue={abt.abt.fields.familiar.stringValue}
                required />
            <input placeholder="Tools"
                onBlur={handleTools}
                defaultValue={abt.abt.fields.tools.stringValue}
                required />

            <button onClick={() => onClickUpdate(abt)} className="btn project-button" >Update</button>
        </div>
    );
};

export default AboutUpdate;