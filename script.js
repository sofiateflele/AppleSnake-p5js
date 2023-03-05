name = document.cookie.split(';')[0].split('=')[1]

document.getElementById("name-input").value = name

windowChangeStyle()

refreshClassifica()

function addClassifica(){
    name = document.cookie.split(';')[0].split('=')[1]


    let data = {'nome': name, 'score': parseInt(score)}

    
    fetch('http://93.48.224.122:8081/add_score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => location.reload())
        

}


function refreshClassifica(){
    
    
    fetch('http://93.48.224.122:8081/visualizza_classifica')
        .then((response) => response.json())
        .then((data) => {
            data = data['data']
            for(let i=1; i<11; i++){
                let testoAdd = ''
                if(i <= data.length){
                    testoAdd = data[i-1]['nome'] + ' - ' + data[i-1]['score']
                }else{
                    testoAdd = '???'
                }
                document.getElementById('pos-'+i.toString()).innerHTML = testoAdd

            }
        })
        
}




function nameSave(name){
    var now = new Date();
  var time = now.getTime();
  var expireTime = time + 1000*43200*500;
  now.setTime(expireTime);
    document.cookie = 'name='+name + ';expires='+now.toUTCString()+';path=/'
}

onresize = (event) => {
    windowChangeStyle()
};


function windowChangeStyle(){
    let width = window.innerWidth
    
}





function classificaClick(){
    document.location = "classifica.html"
}
function gameClick(){
    document.location = "index.html"
}


function setCanvasSize(){
    side = 35
    canvasHeight = side*20
    canvasWidth = side*20
    while(window.innerHeight < canvasHeight+canvasY || window.innerWidth < canvasWidth){
        side -= 1
        canvasHeight = side*20
        canvasWidth = side*20
    }

   

    
}

