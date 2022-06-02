const precioEstudiante=40;
const precioTrainee=100;
const precioJunior=170;

function calcular(cantidad,categoria){
    var cantidad=document.getElementById('cantidad').value;
    var categoria=document.getElementById('categoria').value;    
    let valorTotal;
    switch(categoria){
        case "estudiante":
            valorTotal=cantidad*precioEstudiante;
            document.getElementById('total').value=("Total a pagar: $"+valorTotal);
            break;
        case 'trainee':
            valorTotal=cantidad*precioTrainee;
            document.getElementById('total').value=("Total a pagar: $"+valorTotal);
            break;
        case 'junior':
            valorTotal=cantidad*precioJunior;
            document.getElementById('total').value=("Total a pagar: $"+valorTotal);
            break;
    }
}  