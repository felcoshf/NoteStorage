let draggedItem = null;

document.addEventListener('dragstart', (e) => {
    const item = e.target.closest('.item');
    if (item) draggedItem = item;
});

document.querySelectorAll('.category-target').forEach(target => {
    target.addEventListener('dragover', (e) => e.preventDefault());

    target.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedItem) {
            draggedItem.remove();
            draggedItem = null;
        }
    });
});

document.addEventListener('dragend', () => {
    draggedItem = null;
});







// ДЛЯ ДЖАНГО

// let draggedItem = null;

// // Запоминаем, что тянем
// document.addEventListener('dragstart', (e) => {
//     const item = e.target.closest('.item');
//     if (item) {
//         draggedItem = item;
//         item.classList.add('dragging');
//         e.dataTransfer.effectAllowed = 'move';
//     }
// });

// document.addEventListener('dragend', (e) => {
//     const item = e.target.closest('.item');
//     if (item) item.classList.remove('dragging');
//     draggedItem = null;
// });

// // Drop-зоны (категории)
// document.querySelectorAll('.category-target').forEach(target => {
//     target.addEventListener('dragover', (e) => {
//         e.preventDefault();
//         target.classList.add('drag-over');
//     });

//     target.addEventListener('dragleave', () => {
//         target.classList.remove('drag-over');
//     });

//     target.addEventListener('drop', async (e) => {
//         e.preventDefault();
//         target.classList.remove('drag-over');

//         if (!draggedItem) return;

//         const newCategory = target.dataset.category;
//         const currentCategory = draggedItem.dataset.category;

//         // Не отправляем запрос, если категория не меняется
//         if (newCategory === currentCategory || newCategory === 'all') return;

//         const id = draggedItem.dataset.id;

//         try {
//             const response = await fetch(`/notes/${id}/move/`, {
//                 method: 'POST',
//                 headers: {
//                     'X-CSRFToken': getCookie('csrftoken'),
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ category: newCategory }),
//             });

//             if (response.ok) {
//                 // Обновляем атрибут и, если нужно, визуально перемещаем
//                 draggedItem.dataset.category = newCategory;

//                 // Например, плавно убираем и переставляем в конец списка
//                 draggedItem.style.opacity = '0';
//                 setTimeout(() => {
//                     draggedItem.style.opacity = '1';
//                     document.querySelector('.drafts').appendChild(draggedItem);
//                 }, 200);
//             } else {
//                 alert('Не удалось переместить заметку');
//             }
//         } catch (err) {
//             console.error(err);
//             alert('Ошибка сети');
//         }
//     });
// });

// // Утилита для CSRF
// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
// }