//alert("i am ok")
function addNewWField(){
    //alert("i am ok")
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("weField");
    newnode.setAttribute("rows",3);
    newnode.classList.add("mt-2");
    newnode.setAttribute('placeholder',"Enter here");


    let weAddButtonOb=document.getElementById("weAddButton");
    let weOb=document.getElementById("we");

    weOb.insertBefore(newnode,weAddButtonOb);
    
}

function AddNewAQField(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("aqField");
    newnode.setAttribute("rows",3);
    newnode.classList.add("mt-2");
    newnode.setAttribute('placeholder',"Enter here");


    let aqAddButtonOb=document.getElementById("aqAddButton");
    let aqOb=document.getElementById("aq");

    aqOb.insertBefore(newnode,aqAddButtonOb);
}

// alert("loading");

// gerrating cv
function genrateCv(){
  let nameField=document.getElementById("nameField").value;
  let nameT1=document.getElementById("nameT1");
  nameT1.innerHTML=nameField;

  document.getElementById('contactT1').innerHTML=document.getElementById("contactField").value;

  document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;

  document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;
  document.getElementById('instaT').innerHTML=document.getElementById("instaField").value;
  document.getElementById('linkedT').innerHTML=document.getElementById("linkedField").value;


  //objective
  document.getElementById('objectiveT').innerHTML=document.getElementById("objectiveField").value;

  //work
  let wes=document.getElementsByClassName('weField');
  let str="";
  for(let e of wes){
    str=str+`<li>${e.value}</li>`;
  }
  document.getElementById('weT').innerHTML=str;

  //acdamic
  let aqs=document.getElementsByClassName('aqField');
  let str1="";
  for(let e of aqs){
    str1=str1+`<li>${e.value}</li>`;
  }
  document.getElementById('aqT').innerHTML=str1;


  document.getElementById('cv-form').style.display='none';
  document.getElementById('cv-template').style.display='block';

}

function printCv(){
 window.print();
}