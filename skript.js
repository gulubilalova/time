const clock =()=>{
    let date = new Date()


    let month_num = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minute = date.getMinutes()
    let sekonds = date.getSeconds()

    if(day<=9) day="a"+day
    if(hours<=9)hours="a"+hours
    if(minute<=9)minute="a"+minute
    if(sekonds<=9)sekonds="a"+sekonds
    

    let month =["ян","фев","мар","апр","май","июн","июл","ав","сен","окт","ноя","дек"]

    console.log(month[11])

    let date_time = "бугун: " + day +"-"+month_num+"у"
     
    let element = document.getElementById('time')
    element.innerHTML = date_time
    setTimeout(()=> {
        clock()
    },1000);
    


    
} 
 clock()
 


