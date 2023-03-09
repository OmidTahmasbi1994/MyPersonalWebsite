function userName(username)
{
    if(username=="omid1994")
    {
        var txt = ""
        var operationName ={firstName:"Omid" , lastName:"Tahmasebi" , Age:29}
        for(var i in operationName)
        {
            txt += operationName[i] + "</br></br> "
        }    
        document.write(txt)
    }
    else
    {
        alert("This User Is Not Exist !")
    }

}
