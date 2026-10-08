const target = document.getElementById('dropTarget');

    document.addEventListener('dragstart', (e) => {
      if (e.target.classList.contains('item')) {
        e.dataTransfer.setData('text/plain', e.target.dataset.id);
      }
    });

    target.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    target.addEventListener('drop', (e) => {
      e.preventDefault();
      const itemId = e.dataTransfer.getData('text/plain');
      
      if (itemId) {
        const baseUrl = "{% url 'destination_page' %}";
        window.location.href = `${baseUrl}?element_id=${itemId}`;
      }
    });