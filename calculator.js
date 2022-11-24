let getdata = document.getElementById('src');
btns = document.querySelectorAll('button');
let getdatavalue = '';
for (item of btns) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        console.log('Button text is ', btntext);
        if (btntext == 'X') {
            btntext = '*';
            getdatavalue += btntext;
            getdata.value = getdatavalue;
        }
        else if (btntext == 'C') {
            getdatavalue = "";
            getdata.value = getdatavalue;
        }
        else if (btntext == '=') {
            getdata.value = eval(getdatavalue);
        }
        else {
            getdatavalue += btntext;
            getdata.value = getdatavalue;
        }

    })
}
