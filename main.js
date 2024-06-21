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
