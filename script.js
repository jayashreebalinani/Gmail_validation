...........................


var arr = ["moc.","ude.","lim.", "ten.","gro.","tni." ,"vog."]
function valid()
{
    var x = document.getElementById("warn")
    x.innerHTML = ""
    var data = document.getElementById("mail").value
    var data1 = ""
    data = data.toLowerCase()
    
    for(var i = data.length-1; i >= 0 ; i--)
    {
        data1 += data[i]
    }
    var data2 = data1.slice(0,4).split("").join("")
    var find = arr.find(str => str == data2)
    if(find !== data2)
    {
        x.innerHTML="Invalid mail"
    }
    var count = 0
    for(var i = 0; i < data.length; i++)
    {
        if(data[i]=='@')
        {
            count++
        }    
    }    
    if(count !== 1)
    {
        x.innerHTML="Invalid mail"
    }
    var username = data.split("@")
    var alpcount = 0
    var salpcount = 0
    var num = 0
    var dotcount = 0
    var username1 = username[0].split("")
    var dot = username1.length-1
    if(username1[dot] == '.')
    {
        x.innerHTML="Invalid mail"
    }

    for(var i = 0; i < username1.length;i++)
    {
        if(username1[0] == '.')
        {
            dotcount -= 1
            x.innerHTML="Invalid mail"

        }
        
        if(username1[i] >= 'a' && username1[i] <= 'z')
        {
            salpcount+=1
        }
        if(username1[i] >= 'A' && username1[i] <= 'Z')
        {
            alpcount+=1
        }
        if(username1[i] >= '0' && username1[i] <= '9')
        {
            num+=1
        }
        if( username1[i] == '.')
        {
           dotcount += 1
        }
        if(username1[i] == '.' && username1[i+1] == '.')
        {
            x.innerHTML="Invalid mail"
        }
    }  
    var add = Math.floor(alpcount+salpcount+num+dotcount)
    var sub = username[0].length-add
  
    if(sub !== 0)
    {
        x.innerHTML="Invalid mail"
        
    }
    if(add == 0)
    {
        x.innerHTML="Invalid mail"
        
    }
    if(add < 6)
    {
        x.innerHTML="Invalid mail"
        
    }
    
    var username2 = username[1].split("").slice(0,5).join("")
    if(username2 !== 'gmail')
    {
        x.innerHTML="Invalid mail"
    }       
    if(x.innerHTML=="") {
        x.innerHTML="Valid mail"   

    }   
    console.log(x.innerHTML)

}
