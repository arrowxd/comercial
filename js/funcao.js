function minhaFuncao1(){
    $('#area-01').css({
        color: '#ff000',
        textTransform:'uppercase',
        width:'15%'
    });
}

function minhaFuncao2(){
    $('#area 02').empty();
    var alunos=['Aluno 1',"Aluno 2","Aluno 3", "Aluno 4","Aluno 5"]
    $.each(alunos, function(index, value){
        $('#area 02').append(value);        
    });
};

function minhaFuncao3(){
    
    $('#area 02').empty();
    
    var  alunos = [
        {
        nome : 'Aluno 01',
        idade: 22
        },
        {
        nome : 'Aluno 02',
        idade: 22
        },
        {
        nome : 'Aluno 03',
        idade: 22
        },
        {
        nome : 'Aluno 04',
        idade: 22
        }
    ];
    for(i=0; i<5; i++){
        console.log(alunos[i]);
    }
    var list = $("#area-01").append('<ul></ul>').find('ul');
    $.each(alunos, function(index, value){
        list.append('<li>' + value.nome + '-' + value.idade + '</li>');
    });
};