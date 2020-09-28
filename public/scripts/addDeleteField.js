//Executar uma acao
function cloneFields() {
    //Pegar os campos para verificação
    const weekdayCheck = document.getElementById("weekday")
    const timeFrom_Check = document.getElementById("time_from")
    const timeTo_Check = document.getElementById("time_to")
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) 
    //Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //Verificar se está vazio
    if(weekdayCheck.options[weekdayCheck.selectedIndex].value==""
    || timeFrom_Check.value=="" || timeTo_Check.value=="") {
        window.alert("Preencha todos os campos")
    } else {  
    //Para cada campo, limpar
        fields.forEach(field => {  //forEach = Para cada
            //pegar o field do momento e limpa ele
            field.value =""
        });

        //Colocar na página
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
        
    }   
        
    
}

function deleteField() {
    document.querySelector('.schedule-item').remove()
}

function showDelete() {
   var $weekdayCheck = $("#weekday").val();
   var $time_from = $("#time_from").val();
   var $time_to = $("#time_to").val();
   
   if($weekdayCheck!="" && $time_from!="" && $time_to!="") {
       $('#delete-time').show();
   } 
} 



 



