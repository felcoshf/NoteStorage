const quill = new Quill('#editor-container', {
    theme: 'snow',
    placeholder: 'Текст заметки...',
    modules: {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['image'],
            ['clean']
        ]
    }
});

const form = document.querySelector('.create-note-form');
const hiddenInput = document.getElementById('hidden-content-input');

form.addEventListener('submit', function(event) {
    const htmlContent = quill.getSemanticHTML(); 
    
    hiddenInput.value = htmlContent;
    
    console.log('Отправляемый контент:', hiddenInput.value);
});
