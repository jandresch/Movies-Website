window.addEventListener('load', navigate);

function navigate(){
    console.log('si me ejecuto perro')
    if(location.hash.startsWith('#trending')){
        console.log('Estas en el trending')
    }
}
