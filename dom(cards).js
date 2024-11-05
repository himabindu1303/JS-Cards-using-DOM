let img1=document.createElement("img")
img1.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/030/134/248/small/a-blue-house-sits-on-a-bridge-over-a-lake-ai-generated-photo.jpg")

let img2=document.createElement("img")
img2.setAttribute("src","https://static.vecteezy.com/system/resources/previews/032/244/538/large_2x/the-house-on-the-lake-lake-nature-nature-wallpaper-nature-wallpaper-wallpaper-hd-ai-generated-free-photo.jpg")

let img3=document.createElement("img")
img3.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/032/246/746/small/beautiful-peacock-in-the-garden-wallpaper-ai-generated-free-photo.jpg")

let img4=document.createElement("img")
img4.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/030/141/082/small/the-temple-of-the-moon-in-the-forest-ai-generated-photo.jpg")

let arr=[img1,img2,img3,img4]

for(i=0;i<arr.length;i++){
    arr[i].style.width="300px"
    let container=document.createElement("div")
    container.style.display="inline-block"
    container.style.border="2px black solid"
    container.style.margin="10px"
    container.style.padding="3px"
    let p1=document.createElement("p")
    p1.textContent="Nature Image Photo"
    let btn=document.createElement("button")
    btn.textContent="orderNow"
    btn.addEventListener("click",()=>{ confirm(`You wanna order this`) })
    container.append(arr[i],p1,btn)
    document.body.append(container)
}