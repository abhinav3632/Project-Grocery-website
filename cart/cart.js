

function deleteRow(row,index){
    var d = row.parentNode.parentNode.parentNode.parentNode.rowIndex;
    if(index == 'a'){
        document.getElementById('b1').innerText = parseInt(document.getElementById('b1').innerText) - parseInt(document.getElementById('a').innerText);
        document.getElementById('b2').innerText = parseInt(document.getElementById('b1').innerText) / 10;
        document.getElementById('b3').innerText = parseInt(document.getElementById('b3').innerText) - parseInt(document.getElementById('b1').innerText) 
        // document.getElementById('b1').innerText = 0;

        // document.getElementById('a').innerText = 0;
    }
    else if(index == 'b'){
        document.getElementById('b1').innerText = parseInt(document.getElementById('b1').innerText) - parseInt(document.getElementById('b').innerText);
        document.getElementById('b2').innerText = parseInt(document.getElementById('b1').innerText) / 10;
        document.getElementById('b3').innerText = parseInt(document.getElementById('b3').innerText) - parseInt(document.getElementById('b1').innerText)   
    }
    else{
        document.getElementById('b1').innerText = parseInt(document.getElementById('b1').innerText) - parseInt(document.getElementById('b').innerText);
        document.getElementById('b2').innerText = parseInt(document.getElementById('b1').innerText) / 10;
        document.getElementById('b3').innerText = parseInt(document.getElementById('b3').innerText) - parseInt(document.getElementById('b1').innerText)
    }
    document.getElementById('dsTable').deleteRow(d);

    bill();
}

function calc(col,id) {

    let value = col.value;
    if(value < 0 ) value = 0;

    let tr = document.getElementById(id)
    if(id == 'a'){
        tr.innerHTML =  value*299;
    }
    else if (id == 'b') {
        tr.innerHTML =  value*40;
    }
    else{
        tr.innerHTML =  value*99;
    }
    bill();
}

function bill() {
    let sub = document.getElementById('b1');
    let tax = document.getElementById('b2');
    let total = document.getElementById('b3');
    let first = parseInt(document.getElementById('a').innerText);
    let second = parseInt(document.getElementById('b').innerText);
    let third = parseInt(document.getElementById('c').innerText);
    
    // console.log(first);
    let sum = first+second+third;
    sub.innerHTML =  sum;
    tax.innerHTML =  sum/10;
    total.innerHTML =  (sum + (sum/10));

}