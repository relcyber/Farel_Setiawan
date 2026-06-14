emailjs.init("n0NDDTjm3NAZ0udFE");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_kf2t888",
        "template_vdlgndp",
        form
    )
    .then(() => {

        alert("Pesan berhasil dikirim!");
        form.reset();

    })
    .catch((error) => {

        console.log(error);
        alert("Gagal mengirim pesan!");

    });

});