
var ctx = document.getElementById('myChart')
var myChart = new Chart(ctx, {
    type:'doughnut',
    data:{
        datasets: [{
            label: 'cantidad de Productos',
            backgroundColor: ['#6bf1ab','#63d69f', '#438c6c', '#509c7f', '#1f794e', '#34444c', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#0D47A1'],
            borderColor: ['black'],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:{
                beginAtZero:true
            }
        }
    }
})

let url = 'https://fakestoreapi.com/products'
fetch(url)
    .then( response => response.json() )
    .then( datos => mostrar(datos) )
    .catch( error => console.log(error) )


const mostrar = (articulos) =>{
    articulos.forEach(element => {
        myChart.data['labels'].push(element.category)
        myChart.data['datasets'][0].data.push(element.price)
        myChart.update()
    });
    console.log(myChart.data)
}    

   