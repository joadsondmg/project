const btn_cad_avu = document.getElementById('btn-cad-avu'); 
const btn_searc_avu = document.getElementById('btn-searc-avu'); 
const btn_cad_oc = document.getElementById('btn-cad-oc'); 
const btn_searc_oc = document.getElementById('btn-searc-oc'); 
const btn_cad_rot = document.getElementById('btn-cad-rot'); 
const btn_searc_rot = document.getElementById('btn-searc-rot'); 

btn_cad_avu.addEventListener('click', function () {
    window.location.href = 'cadastro_AVU.html';
})

btn_searc_avu.addEventListener('click', function () {
    window.location.href = 'searc_AVU.html';
})

btn_cad_oc.addEventListener('click', function () {
    window.location.href = 'cadastro_oc.html';
})

btn_searc_oc.addEventListener('click', function () {
    window.location.href = 'searc_oc.html';
})

btn_cad_rot.addEventListener('click', function () {
    window.location.href = 'cadastro_rot.html';
})

btn_searc_rot.addEventListener('click', function () {
    window.location.href = 'seach-_rot.html';
})
