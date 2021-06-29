'use strict'

window.onload=()=>{
    //!Seleccion de los elementos del formulario
    let nombre=document.getElementById('nombre');
    let apellido=document.getElementById('apellidos');
    let correo=document.getElementById('correo');
    let contrasena=document.getElementById('contra');
    let formulario=document.getElementById('formulario');
    let boton=document.getElementById('boton');


    var nombres=false;
    var apellidos=false;
    var correos=false;
    var con=false;

    //?Expresiones regulares
    let nombreApellExpr=/(^[A-Za-z]{2,15})\s?(([A-Za-z]{2,15})?)$/;
    let correoExpr=/(^[A-Za-z0-9]+)[@]([A-Za-z0-9]+)[\.]([a-z]{3})$/;


    nombre.addEventListener('blur',()=>{
        let bueno=document.getElementById('nombreB');
        let malo=document.getElementById('nombreM');
        malo.style.display='none';
        bueno.style.display='none';
        if(nombreApellExpr.test(nombre.value.trim())){
            bueno.style.display='inline-block';
            nombres=true;
        }else{
            malo.style.display='inline-block';
            nombres=false;
        }
        comprobar();
    })

    apellido.addEventListener('blur',()=>{
        let bueno=document.getElementById('apellidosB');
        let malo=document.getElementById('apellidosM');
        malo.style.display='none';
        bueno.style.display='none';
        if(nombreApellExpr.test(apellido.value.trim())){
            bueno.style.display='inline-block';
            apellidos=true;
        }else{
            malo.style.display='inline-block';
            apellidos=false;
        }
        comprobar();
    })

    correo.addEventListener('blur',()=>{
        let bueno=document.getElementById('correoB');
        let malo=document.getElementById('correoM');
        malo.style.display='none';
        bueno.style.display='none';
        if(correoExpr.test(correo.value.trim())){
            bueno.style.display='inline-block';
            correos=true;
        }else{
            malo.style.display='inline-block';
            correos=false;
        }
        comprobar();
    })

    contrasena.addEventListener('blur',()=>{
        let bueno=document.getElementById('contrasenaB');
        let malo=document.getElementById('contrasenaM');
        malo.style.display='none';
        bueno.style.display='none';
        contrasena.value=contrasena.value.trim();
        if(contrasena.value!=""){
            bueno.style.display='inline-block';
            con=true;
        }else{
            malo.style.display='inline-block';
            con=false;
        }
        comprobar();
    })
    //Todo Evento submit para el formulario
    formulario.addEventListener('submit',(e)=>{
       alert('Datos Correctos');
       e.preventDefault();
    })

    function comprobar(){
        if(nombres===true&&apellidos===true&&correos===true&&con===true){
            boton.removeAttribute('disabled');
        }
    }
}