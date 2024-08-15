console.log("salam")
const productForm=document.getElementById("productForm");
productForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const category=e.srcElement[0].value;
    console.log(category)
    // const title=e.srcElement[1].value;
    // const description=e.srcElement[2].value;
    // const file=e.srcElement[3].file;
    // const price=e.srcElement[4].value;
    // const submitButton=e.srcElement[5].value;

    console.log(category)
})
