console.log("salam")
import {
    auth,
    createUserWithEmailAndPassword,
    db,
    addDoc,
    collection,
    setDoc,
    doc,
} from "../../utils/firebaseconfiguration.js";

const signupForm = document.getElementById("signup");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.srcElement[0].value;
    // console.log(email)
    const password = e.srcElement[1].value;
    const confirmPassword = e.srcElement[2].value;
    const firstName = e.srcElement[3].value;
    const lastName = e.srcElement[4].value;
    const phone = e.srcElement[5].value;
    const company = e.srcElement[6].value;

    const userData = {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        phone,
        company,
    };
    // console.log(userData);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            const docRef = doc(db, "data", user.uid);
            setDoc(docRef, userData).then((userRef) => {
                window.location.href = "../../index.html";
            })
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorMessage)
            console.log(errorMessage)
            // ..
        });

})
