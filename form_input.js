var input_value = document.querySelector('#btn_input');
var add_value = document.querySelector('#btn_add');
var view_value = document.querySelector('#btn_view');
var delete_value = document.querySelector('#btn_delete');
var update_value = document.querySelector('#btn_update')
var result = document.querySelector('.result');
var back = document.querySelector('#back');
var confirm = document.querySelector('#confirm')
var index_update = document.querySelector('#index');
var update_To = document.querySelector('#box_update');
var advance = document.querySelector('#advance');
var sort_value = document.querySelector('#sort');
var arr_value = [n];
var arr_search = [k];
var arr_index = [p];
var p = 0;
var n = 0;
var k = 0;
var index_neg = 0;
var t = 0;
var tbl;

btn_add.addEventListener('click', () => {

    if (input_value.value == '') {
        alert("Can not be NULL,Try again")
    }
    else {
        arr_value[n] = input_value.value;
        n++;
        console.log(arr_value)
    }
    arr_search[k] = null;
    tbl = `<table border="1" class="table w-100 bg-info">
    <tr>
    <th>No.</th>
    <th>Value</th>
    </tr>`;

for (var i = 0; i < n; i++) {
tbl += `<tr>
            <td>${i + 1}</td>
            <td>${arr_value[i]}</td>
        </tr>`;
}
tbl += `</table>`;
if (n == 0) { alert("No Data") }
result.innerHTML = tbl;
// alert(2)
k = 0;
    document.querySelector('#btn_update').style.display = 'none';
    document.querySelector('#btn_delete').style.display = 'none';
    input_value.value == ''
    document.querySelector('#index').style.display = 'none';
    document.querySelector('#box_index').style.display = 'none';
    document.querySelector('#updateTo').style.display = 'none';
    document.querySelector('#box_update').style.display = 'none';
}
)
btn_view.addEventListener('click', () => {

    tbl = `<table border="1" class="table w-100 bg-info">
            <tr>
            <th>No.</th>
            <th>Value</th>
            </tr>`;

    for (var i = 0; i < n; i++) {
        tbl += `<tr>
                    <td>${i + 1}</td>
                    <td>${arr_value[i]}</td>
                </tr>`;
    }
    tbl += `</table>`;
    if (n == 0) { alert("No Data") }
    result.innerHTML = tbl;
    // alert(2)
    k = 0;

    document.querySelector('#btn_update').style.display = 'none';
    document.querySelector('#btn_delete').style.display = 'none';
    document.querySelector('#index').style.display = 'none';
    document.querySelector('#box_index').style.display = 'none';
    document.querySelector('#updateTo').style.display = 'none';
    document.querySelector('#box_update').style.display = 'none';
    document.querySelector('#sort').style.display = 'block';
})
btn_search.addEventListener('click', () => {
    k = 0;
    p = 0;
    index_neg = 0;
    if (input_value.value == '') {
        alert("Can not be NULL,Try again")
    }
    else {

        tbl = `<table border="1" class="table w-100 bg-info">
                <tr>
                <th>No.</th>
                <th>Value</th>
                </tr>`;

        for (var i = 0; i < n; i++) {
            if (input_value.value == arr_value[i]) {
                arr_search[k] = arr_value[i];
                arr_index[p] = parseInt(i);
                p ++;
                k = k+1;
                index_neg += 1;
                
            }
            
        }
        for (var i = 0; i < p; i++) {
            arr_index[i] = parseInt(arr_index[i]) + 1;
        }

        for(var o = 0 ; o<k ; o++){
            tbl += `<tr>
            <td>${arr_index[o]}</td>
            <td>${arr_search[o]}</td>
        </tr>`;
           }
        tbl += `</table>`;
        if (index_neg == 0) {
            alert("not found")
            document.querySelector('#btn_delete').style.display = 'none';
            document.querySelector('#btn_update').style.display = 'none';
        }
        else {
            document.querySelector('#btn_delete').style.display = 'block';
            document.querySelector('#btn_update').style.display = 'none';
            document.querySelector('#advance').style.display = 'block';
            document.querySelector('#sort').style.display = 'block';
        }
        index_neg = 0;
    }
    result.innerHTML = tbl;
    // alert(3)


})
btn_delete.addEventListener('click', () => {
    index_neg = 0;
    for (var i = 0; i < n; i++)
        for (var j = 0; j < k; j++) {
            if (arr_value[i] == arr_search[j]) {
                arr_value.splice(i, 1);
                index_neg += 1;
            }
        }
    n = n - index_neg;
    if (index_neg == 0) { alert("Delete Fail") }
    else { alert("Value deleted") }

    index_neg = 0;
    k = 0;
    document.querySelector('#btn_update').style.display = 'none';
    document.querySelector('#btn_delete').style.display = 'none';
    k = 0;
    index_neg = 0;
    if (input_value.value == '') {
        alert("Can not be NULL,Try again")
    }
    else {
        for (var i = 0; i < n; i++) {
            if (input_value.value == arr_value[i]) {
                arr_search[k] = input_value.value;
                k++;
                index_neg += 1;
            }
        }
        index_neg = 0;
    }



    tbl = `<table border="1" class="table w-100 bg-info">
    <tr>
    <th>No.</th>
    <th>Value</th>
    </tr>`;
    for (var i = 0; i < k; i++) {
        tbl += `<tr>
                    <td>${i + 1}</td>
                    <td>${arr_search[i]}</td>
                </tr>`;
    }
    tbl += `</table>`;
    result.innerHTML = tbl;
    document.querySelector('#sort').style.display = 'block';
})
update_value.addEventListener('click', () => {


    document.querySelector('#confirm').style.display = 'block';
 



})
back.addEventListener('click', () => {

    tbl = `<table border="1" class="table w-100 bg-info">
            <tr>
            <th>No.</th>
            <th>Value</th>
            </tr>`;

    for (var i = 0; i < n; i++) {
        tbl += `<tr>
                    <td>${i + 1}</td>
                    <td>${arr_value[i]}</td>
                </tr>`;
    }
    tbl += `</table>`;
    if (n == 0) { alert("No Data") }
    result.innerHTML = tbl;
    // alert(2)
    k = 0;
    document.querySelector('#index').style.display = 'none';
    document.querySelector('#box_index').style.display = 'none';
    document.querySelector('#updateTo').style.display = 'none';
    document.querySelector('#box_update').style.display = 'none';

    // botton hide

    document.querySelector('#btn_add').style.display = 'block';
    document.querySelector('#btn_view').style.display = 'block';
    document.querySelector('#btn_search').style.display = 'block';
    document.querySelector('#btn_delete').style.display = 'none';
    document.querySelector('#btn_update').style.display = 'none';

    document.querySelector('#back').style.display = 'none';
    document.querySelector('#confirm').style.display = 'none';
    document.querySelector('#sort').style.display = 'block';
})
advance.addEventListener('click', () => {

    document.querySelector('#index').style.display = 'block';
    document.querySelector('#box_index').style.display = 'block';
    document.querySelector('#updateTo').style.display = 'block';
    document.querySelector('#box_update').style.display = 'block';

    // botton hide

    document.querySelector('#btn_add').style.display = 'none';
    document.querySelector('#btn_view').style.display = 'none';
    document.querySelector('#btn_search').style.display = 'none';
    document.querySelector('#btn_delete').style.display = 'none';
    document.querySelector('#btn_update').style.display = 'block';

    // unhide confirm and back botton

    document.querySelector('#back').style.display = 'block';
    document.querySelector('#advance').style.display = 'none'
    document.querySelector('#confirm').style.display = 'none';
    document.querySelector('#sort').style.display = 'none';
})

confirm.addEventListener('click', () => {



    index_update.value = index_update.value - 1;
    arr_value[index_update.value] = update_To.value;


    document.querySelector('#index').style.display = 'none';
    document.querySelector('#box_index').style.display = 'none';
    document.querySelector('#updateTo').style.display = 'none';
    document.querySelector('#box_update').style.display = 'none';

    // botton hide

    document.querySelector('#btn_add').style.display = 'block';
    document.querySelector('#btn_view').style.display = 'block';
    document.querySelector('#btn_search').style.display = 'block';
    document.querySelector('#btn_delete').style.display = 'none';
    document.querySelector('#btn_update').style.display = 'none';

    document.querySelector('#back').style.display = 'none';
    document.querySelector('#confirm').style.display = 'none';
})
sort_value.addEventListener('click', () => {

 
    arr_value = arr_value.sort(); 
    arr_value = arr_value.sort(function(a, b){return a-b});




      
    tbl = `<table border="1" class="table w-100 bg-info">
            <tr>
            <th>No.</th>
            <th>Value</th>
            </tr>`;

    for (var i = 0; i < n; i++) {
        tbl += `<tr>
                    <td>${i + 1}</td>
                    <td>${arr_value[i]}</td>
                </tr>`;
    }
    tbl += `</table>`;
    if (n == 0) { alert("No Data") }
    result.innerHTML = tbl;
    // alert(2)
    k = 0;

    document.querySelector('#btn_update').style.display = 'none';
    document.querySelector('#btn_delete').style.display = 'none';
    document.querySelector('#index').style.display = 'none';
    document.querySelector('#box_index').style.display = 'none';
    document.querySelector('#updateTo').style.display = 'none';
    document.querySelector('#box_update').style.display = 'none';
})