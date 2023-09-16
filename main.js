function addUser(event){
    event.preventDefault()
    let email=document.getElementById("exampleInputEmail1").value
    let phone=document.getElementById("exampleInputPassword1").value

    //console.log(email, phone)
    localStorage.setItem("email",email)
    localStorage.setItem("phone",phone)
    let a=localStorage.getItem("email")
    let b=localStorage.getItem("phone")
    console.log(a,b)
}