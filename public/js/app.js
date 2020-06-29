

    const dataForm=document.querySelector('form')
   
    dataForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        let form = document.forms.my; 
        var fname=form.elements.fname
        var mname=form.elements.mname
        var lname=form.elements.lname
        var state=form.elements.state
        var city=form.elements.city
        var email=form.elements.email
        var favbook=form.elements.favbook
        var favpoem=form.elements.favpoem
    
        const url1='/testing?fname='+fname.value+'&mname='+mname.value+'&lname='+lname.value+'&state='+state.value+'&city='+city.value+'&email='+email.value+'&favbook='+favbook.value+'&favpoem='+favpoem.value
    
    console.log(email.value)
    if(email.value=='')
    {
        alert("Please Provide an valid email address"); 
    }  
    else
    {
        fetch(url1).then((response)=>{
            response.json().then((data)=>{
    
                    console.log(data)
            })
            alert("Your response is recorded");
            document.getElementById("newForm").reset();
           })
    }
})