document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#color-one").addEventListener(
        "click",
        function() {
            document.querySelector(".sidebar").classList.remove("sidebar-two", "sidebar-three")
            document.querySelector(".sidebar").classList.add("sidebar-one")
        }
    )
    document.querySelector("#color-two").addEventListener(
        "click",
        function() {
            document.querySelector(".sidebar").classList.remove("sidebar-one", "sidebar-three")
            document.querySelector(".sidebar").classList.add("sidebar-two")
        }
    )
    document.querySelector("#color-three").addEventListener(
        "click",
        function() {
            document.querySelector(".sidebar").classList.remove("sidebar-one", "sidebar-two")
            document.querySelector(".sidebar").classList.add("sidebar-three")
        })
});


document.getElementById('upload-photo').addEventListener('change', function() {
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('profile-pic').src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
});

function saveAsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.html(document.body, {
        callback: function (doc) {
            doc.save('curriculum.pdf');
        },
        x: 10,
        y: 10,
        html2canvas: { scale: 0.5 }
    });
}
