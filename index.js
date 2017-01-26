$(() => {
    let state = {
        TODO: 'to do',
        DONE: 'done'
    };

    let stateObject = null;

    if (!stateObject || stateObject === null) {
        window.sessionStorage.setItem(state, JSON.stringify(state));
    }

    stateObject = JSON.parse(window.sessionStorage.getItem(state));
    console.log(stateObject);

    $('.addItem').on('click', () => {
        let inputValue = $('#inputName').val();
        let button = '<button>Usuń</button>';
        let status = `status: ${stateObject.TODO}`;
        let task = inputValue + button + status;

        if (inputValue.length) {
            $('<li />', {html: task}).appendTo('ul.toDoList')
        }
    });

    $('ul').on('click', 'button', (e) => {
        $(this).parent().remove()
    });


});