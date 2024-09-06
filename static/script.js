function generateNotes() {
    const novelName = document.getElementById('novelName').value;
    const authorName = document.getElementById('authorName').value;

    fetch('/generate_notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `novelName=${novelName}&authorName=${authorName}`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('notesArea').value = data.notes;
        document.getElementById('downloadPDF').style.display = 'block';
        document.getElementById('downloadDOC').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
}

function downloadNotes(fileType) {
    window.location.href = `/download/${fileType}`;
}
 
