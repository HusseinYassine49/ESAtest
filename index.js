document.addEventListener('DOMContentLoaded', function() {
    const addToSpecificBtn = document.querySelector('.btn-add-specific');
    const addToGeneralBtn = document.querySelector('.btn-add-general');
    const searchBtn = document.querySelector('.btn-search');
    const textInput = document.querySelector('#textInput');
    const searchInput = document.querySelector('#searchInput');
    const deleteBtn = document.querySelector('.btn-delete');

    addToSpecificBtn.addEventListener('click', function() {
        const inputValue = textInput.value.trim();
        if (!inputValue) {
            alert('Please enter a value');
            return;
        }

        const selectedCategory = document.querySelector('input[name="inlineRadioOptions"]:checked');
        if (!selectedCategory) {
            alert('Please select a category');
            return;
        }

        if (selectedCategory.value === 'fruits') {
            addAlertToList('Fruits! - ' + inputValue, 'info', '#fruitsList');
        } else if (selectedCategory.value === 'legumes') {
            addAlertToList('Legumes! - ' + inputValue, 'primary', '#legumesList');
        }

        textInput.value = '';
    });

    addToGeneralBtn.addEventListener('click', function() {
        const inputValue = textInput.value.trim();
        if (!inputValue) {
            alert('Please enter a value');
            return;
        }

        const selectedCategory = document.querySelector('input[name="inlineRadioOptions"]:checked');
        if (!selectedCategory) {
            alert('Please select a category');
            return;
        }

        if (selectedCategory.value === 'fruits') {
            addAlertToList('Fruits! - ' + inputValue, 'success', '#generalList');
        } else if (selectedCategory.value === 'legumes') {
            addAlertToList('Legumes! - ' + inputValue, 'success', '#generalList');
        }

        textInput.value = '';
    });

    searchBtn.addEventListener('click', function() {
        const searchValue = searchInput.value.trim().toLowerCase();
        if (!searchValue) {
            alert('Please enter a search value');
            return;
        }

        searchAndHighlight(searchValue, '#fruitsList');
        searchAndHighlight(searchValue, '#generalList');
        searchAndHighlight(searchValue, '#legumesList');
    });

    deleteBtn.addEventListener('click', function() {
        // Delete all alerts from the lists
        const alertsToDelete = document.querySelectorAll('.btn-delete-alert');
        alertsToDelete.forEach(alert => {
            alert.parentElement.remove();
        });
    });

    function addAlertToList(text, alertType, listId) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-' + alertType;
        alertDiv.textContent = text;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            alertDiv.remove();
        });


        document.querySelector(listId).appendChild(alertDiv);
    }

    function searchAndHighlight(searchValue, listId) {
        const alerts = document.querySelectorAll(listId + ' .alert');
        alerts.forEach(alert => {
            if (alert.textContent.toLowerCase().includes(searchValue)) {
                alert.classList.remove('alert-info', 'alert-success', 'alert-primary');
                alert.classList.add('alert-danger', 'btn-delete-alert');
            }
        });
    }
});