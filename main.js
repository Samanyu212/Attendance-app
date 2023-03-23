name_array=[];
function submit(){
    var n1 = document.getElementById("name1").value;
    var n2 = document.getElementById("name2").value;
    var n3 = document.getElementById("name3").value;
    var n4 = document.getElementById("name4").value;

    name_array.push(n1);
name_array.push(n2);
name_array.push(n3);
name_array.push(n4);

document.getElementById("display_name").innerHTML=name_array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block"
}
function sorting(){
    name_array.sort();
    document.getElementById("display_name").innerHTML=name_array
}


