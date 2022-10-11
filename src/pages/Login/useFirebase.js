import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import initializeFirebase from "./Firebase/firebase.init";
import { getFirestore } from 'firebase/firestore'
export const auth = getAuth(initializeFirebase())

export const db = getFirestore(initializeFirebase())

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState();
    console.log(user)

    // Login User By Email
    const loginUser = (email, password) => {



        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                if (userCredential) {
                    swal({
                        title: "Well Done",
                        text: "Successfully logged in by Email!",
                        icon: "success",
                        button: "OK",
                    });

                }
                else {
                    swal({
                        title: "Sorry",
                        text: "",
                        icon: "error",
                        button: "OK",
                    });
                }
            })
            .catch((error) => {
                swal({
                    title: "Sorry",
                    text: error.message,
                    icon: "error",
                    button: "OK",
                });

            })
            .finally(() => '')
    }

    // Observer
    useEffect(() => {
        const authSubscription = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            }
            else {
                setUser(null)
            }
        })

        return authSubscription;
    }, [auth])
    const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })

    }
    return {
        user,
        loginUser,
        logOut
    }
}

export default useFirebase;