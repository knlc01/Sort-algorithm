let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [10, 12, 3, 41, 5, 61, 7, 81, 9, 1];
let aux;

function print_array(array){
    for(i=0; i < array.length; i++){
        console.log(array[i]);
    }
}

function bubble_sort(array){
    for(let i=1; i < array.length; i++){
        for(let j=0; j < (array.length - i); j++){
            if(array[j] > array[j+1]){
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
}

function insertion_sort(array, n){
    if(n > 0){       
        insertion_sort(array, n-1);
        let x = array[n];
        let j = n-1;
        while(j >= 0 & array[j] > x){
            array[j+1] = array[j];
            j = j-1;
        }
        array[j+1] = x;
    }
}

function swap(a,x,y){
    let tmp = a[x];
    a[x] = a[y];
    a[y] = tmp;
}

function selection_sort(array){
    for(let i=0; i < array.length-1; i++){
        for(let j=i+1; j < array.length; j++){
            if(array[j] < array[i])
            swap(array,i,j);
        }
    }
}

function partition(array, a, b){
    let pivot = array[b];
    let i = a-1;
    for(let j=a; j<=b-1; j++){
        if(array[j] < pivot){
            i++;
            swap(array,i,j);
        }
    }
    swap(array,i+1,b)
    return i+1;
}

function quick_sort(array, a, b){
    if(a < b){
        let pi = partition(array,a,b);
        quick_sort(array,a,pi-1);
        quick_sort(array,pi+1,b);
    }
}


//bubble_sort(array2);
//insertion_sort(array2, array2.length-1);
//selection_sort(array2);
//quick_sort(array2,0,9);
//print_array(array2);
