console.log("salam");
import {
    auth,
    signInWithEmailAndPassword,
} from "../../utils/firebaseconfiguration.js"
const signinForm = document.getElementById("signin").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.srcElement[0].value;
    const password = e.srcElement[1].value;

    if (!email || !password){
        alert("please input an email and password")
    }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                window.location.replace="../../index.html"
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
})