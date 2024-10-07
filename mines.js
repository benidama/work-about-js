function changeContent(some){
    document.getElementById("fetch").innerHTML = some;
}

function cakkl(back){
    let name = "I am already changed by the callbck function";
    back(name);
}
cakkl(changeContent);

async function Asyncwaa (){
    let xttt = new Promise(function(resolve,reject){
        let amuza = new XMLHttpRequest();
        amuza.open("GET","amar.txt");
        amuza.onload = function(){
            if(amuza.status == 200){
                resolve(amuza.response);
            }else{
                reject("Page is not found.");
            }
        }
        amuza.send();
    });
    document.getElementById("text").innerHTML = await xttt;
}
Asyncwaa ();

function myChange(){
    let xxttpp = new XMLHttpRequest();
    xxttpp.open("GET","button.html")
    xxttpp.onload = function(){
        if(xxttpp.status == 200){
            document.getElementById("change").innerHTML = xxttpp.response;
        }else{
            document,getElementById("change").innerHTML = "Not found";
        }
    }
    xxttpp.send();
}

function useXml(){
 let amax = new XMLHttpRequest();
 amax.open("GET","try.xml");
 amax.onload = function(){
    if(amax.status == 200){
        document.getElementById("am").innerHTML = amax.response;
    }else {
        document.getElementById("am").innerHTML = "Not found";
    }
 }
 amax.send();
}