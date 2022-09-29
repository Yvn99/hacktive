var kosong = [];

function tampilkanList(){
    var daftarList = document.getElementById('toDoList');
    daftarList.innerHTML = '';


    var testing = localStorage.getItem('kumpulan');
    // console.log(testing);
    var a = JSON.parse(testing);
    if(a){
        kosong = a;
    }
    // console.log(`a = ${a}`);
    // console.log(`a = ${a[0].nama}`);

    // for (let i = 0; i < a.length; i++) {
    //     var btnHapus = "<a href='#' onclick='hapusList("+i+")'>Hapus</a>";
    //     var checkBox = "<input type='checkbox' onclick='coretList("+i+")' id='checkBox("+i+")'>";
    //     // console.log(`a[i].nama = ${a[i].nama}`);
    //     daftarList.innerHTML += "<tr>"+
    //                             "<td>"+checkBox+"</td>"+
    //                             "<td>"+a[i].nama+"</td>"+
    //                             "<td>"+btnHapus+"</td>"+
    //                             "</tr>";
    // };
    
    a.forEach((element,i) => {
        var btnHapus = "<a href='#' onclick='hapusList("+i+")'>Hapus</a>";
        var checkBox = "<input type='checkbox' onclick='coretList("+i+")' id='checkBox("+i+")'>";

        daftarList.innerHTML += "<tr>"+
                                "<td>"+checkBox+"</td>"+
                                "<td id='"+i+"'>"+element.nama+"</td>"+
                                "<td>"+btnHapus+"</td>"+
                                "</tr>";
    });
};

// untuk ambil data lama
if(localStorage.getItem('kumpulan') !== null){
        var t1 = localStorage.getItem('kumpulan');
        var a1 = JSON.parse(t1);
        for (let i = 0; i < a1.length; i++) {
            kosong.push(a1[i]);
            // console.log(kosong)
        }
    };
// -------------------

function tambahList(){
    
    // console.log(localStorage.getItem('kumpulan'))

    var input = document.querySelector('input[name=list]').value;
    if(input !== ''){

        // local storage 
        
        var obj = {
            nama:input
        };
        
        kosong.push(obj);
        localStorage.setItem('kumpulan', JSON.stringify(kosong));
    }
    
    tampilkanList();
};

function hapusList(id){
    tampilkanList();

    // local storage
    // yg diketahui index array = id
    var testing = localStorage.getItem('kumpulan');
    var a = JSON.parse(testing);

    // mencari dgn function getKeyByValue untuk cek apakah ada value a[id].nama di object a[id]
    // contoh
    // a = [{nama:teksInput1}, {nama:teksInput2}]
    // a[id] = a[0] = {nama:teksInput1}
    // a[id].nama = 'teksInput1'
    // sehingga akan dicari dgn pembenaran apakah ada value 'teksInput1' lalu return nama keynya
    // jika ada maka var apakahAda akan return True


    var apakahAda = getKeyByValue(a[id], a[id].nama);
    (apakahAda in a[id]) ? q = true : q = false;
    // var q = apakahAda in a[id];
    // console.log(q);
    if(q == true){
        a.splice(id,1);
        // console.log(a);
        localStorage.clear();
        localStorage.setItem('kumpulan',JSON.stringify(a));
        tampilkanList();
    }
    
    
};

function getKeyByValue(object, value){
    console.log(object, 'object');
    console.log(value, 'value');
    console.log(Object.keys(object));
    console.log(Object.keys(object).filter(key => object[key] === value));
    return Object.keys(object).filter(key => object[key] === value);
    // Object.keys(object) isinya array = ['nama']
    // dan dgn fungsi filter array tsb akan digunakan untuk
    // menjadi value dari element key di fungsi filter
    // 
}

function coretList(id){
    // var check = document.getElementById('checkBox('+id+')').checked;
    // console.log(check);
    // // if (check.ariaChecked == true){
    // //     document.querySelector('td.').style.cssText = 'text-decoration:line-through';
    // // }

    // if(check.checked){
    //     // document.querySelector(`td#${id}`).style.cssText = 'text-decoration:line-through';
    // }
    // else{
        
    // }
    $(document).ready(function(){
        $("input[type=checkbox]").on('click', function(){
        $(`#${id}`).toggleClass("black");
        })
    });

};



tampilkanList();