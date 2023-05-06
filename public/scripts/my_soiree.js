// Get all edit buttons and edit modals
const editButtons = document.querySelectorAll('.card button#edit');
const editModals = document.querySelectorAll('.edit-modal');

// Loop through each edit button
editButtons.forEach((button, index) => {
    const editModal = editModals[index];
    const close = editModal.querySelector('#close');

    // Attach event listener to edit button
    button.addEventListener('click', () => {
        editModal.classList.add('show');
    });

    // Attach event listener to close button
    close.addEventListener('click', () => {
        editModal.classList.remove('show');
    });
});

// Get all delete buttons and delete modals
const deleteButtons = document.querySelectorAll('.card button#delete');
const deleteModals = document.querySelectorAll('.delete-modal');

// Loop through each delete button
deleteButtons.forEach((button, index) => {
    const deleteModal = deleteModals[index];
    const close = deleteModal.querySelector('#delete-close');
    const yesButton = deleteModal.querySelector('.btn-yes');
    const noButton = deleteModal.querySelector('.btn-no');

    // Attach event listener to delete button
    button.addEventListener('click', () => {
        deleteModal.classList.add('show');
    });

    // Attach event listener to close button
    close.addEventListener('click', () => {
        deleteModal.classList.remove('show');
    });

    // Attach event listener to Yes button
    yesButton.addEventListener('click', () => {
        const card = button.closest('.card');
        card.remove();
        deleteModal.classList.remove('show');
    });

    // Attach event listener to No button
    noButton.addEventListener('click', () => {
        deleteModal.classList.remove('show');
    });
});