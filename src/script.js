window.addEventListener('DOMContentLoaded', () => {
    const tile = document.querySelector('.tile');
    const leaf1 = document.querySelector('.leaf1');
    const leaf2 = document.querySelector('.leaf2');
    const bush2 = document.querySelector('.bush2');
    const mount1 = document.querySelector('.mount1');
    const mount2 = document.querySelector('.mount2');
    
    document.addEventListener('scroll', function() {
        let value = window.scrollY;
        tile.style.marginTop = value * 1.1 + 'px';
        leaf1.style.marginLeft = -value + 'px';
        leaf2.style.marginLeft = value + 'px';
        bush2.style.marginBottom = -value + 'px';
        mount1.style.marginBottom = -value * 1.1 + 'px';
        mount2.style.marginBottom = -value * 1.2 + 'px';
    });

    const title_el = document.getElementById('title');
    title_el.innerText = api.title;

    const note_title_el = document.getElementById('noteTitle');
    const note_content_el = document.getElementById('noteContent'); 
    const note_submit_el = document.getElementById('noteSubmit');

    note_submit_el.addEventListener('click', async () => {
        const title = note_title_el.value;
        const content = note_content_el.value;

        if (title.trim() === '' || content.trim() === '') {
            alert('Please fill in both the title and content fields.');
            return; // Prevent further execution
        }

        const res = await api.createNote({
            title,
            content
        });

        console.log(res);
        
        alert('Data Uploaded Successfully ! Have a nice day 💓💓');

        note_title_el.value = "";
        note_content_el.value = "";
    });
});
