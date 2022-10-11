function getIntersection(array1, array2){
    return array1.filter(function(item){
        return array2.indexOf(item) !== -1;
    });
}

    const Tari = ['Bali', 'Lombok', 'Labuan Bajo'];
    const Sastri = ['Surabaya', 'Bali', 'Lombok'];
    const tripDestination = getIntersection(Tari, Sastri);
    

    function goTo(){
        alert (tripDestination);

}
