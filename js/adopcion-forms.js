function validarcampos() {
    let flagError = false;

    const nombre = document.getElementById("nombre");
    const descripcion = document.getElementById("descripcion");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");

    if (nombre.value == "" || nombre.value.length > 25) {
        document.getElementById("spanErrorNombre").style.display = 'block';
        flagError = true;
    }

    if (descripcion.value == "" || !/^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(descripcion.value) || descripcion.value.length > 400) {
        document.getElementById("spanErrorDescripcion").style.display = 'block';
        flagError = true;
    }

    if (telefono.value == "" || !/^[0-9]+$/.test(telefono.value) || telefono.value.length < 9 || telefono.value.length > 11) {
        document.getElementById("spanErrorTelefono").style.display = 'block';
        flagError = true;
    }

    if (email.value == "" || !/^\w+@(gmail|hotmail|yahoo)+\.(com|ar)$/.test(email.value)) {
        document.getElementById("spanErrorEmail").style.display = 'block';
        flagError = true;

    }

    if (!flagError) {
        const res = document.getElementById('feedback');
        const text = document.createElement('h2')
        text.innerHTML = "Su consulta ha sido enviada.";
        res.appendChild(text);
        res.style.display = 'block';

        nombre.value = '';
        descripcion.value = '';
        telefono.value = '';
        email.value = '';
    }
    return false;
}

function limpiarcampos(e) {
    const spanError = e.target.nextElementSibling;
    spanError.style.display = 'none';
}