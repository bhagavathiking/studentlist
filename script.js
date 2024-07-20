//select box1,box2,main-table,std-Name,std-age,std-gender,std-course,std-email
var box1=document.getElementById("box1")
var box2=document.getElementById("box2")
var maintable=document.getElementById("main-table")
var stdName=document.getElementById("std-Name")
var stdage=document.getElementById("std-age")
var stdgender=document.getElementById("std-gender")
var stdcourse=document.getElementById("std-course")
var stdemail=document.getElementById("std-email")

box1.addEventListener("click",function()
{
    maintable.style.display="inline-block"
    var newtable=document.createElement("tr")
    newtable.innerHTML=`<td class="dd">${stdName.value}</td>
            <td class="dd">${stdage.value}</td>
            <td class="dd">${stdgender.value}</td>
            <td class="dd">${stdcourse.value}</td>
            <td class="dd">${stdemail.value}</td>
            <button onclick="del(event)" class='btn'>Remove</button>`
    maintable.append(newtable)
})
box2.addEventListener("click",function()
{
    stdName.value=""
    stdage.value=""
    stdcourse.value=""
    stdgender.value=""
    stdemail.value=""
})
function del(event){
         event.target.parentElement.remove()
}
