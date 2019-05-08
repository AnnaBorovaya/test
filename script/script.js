fetch('../data.json')
    .then(resp => resp.json())
    .then((data) => {
        data.backLog.forEach(elem => {
            ui.set_backlog(elem)
        })
        data.todo.forEach(elem => {
            ui.set_todo(elem)
        });
        move()
    })

function move() {
    //перемещаемый элемент на котором срабатывает drag and drop
    var item; 
    //определяем массив возможных перемещаемых элементов
    let[...objects] = document.querySelectorAll('#objectsZone > .objects');

    if (objects) {
        objects.forEach(object => {
            object.setAttribute('draggable', 'true')
        })
    }
    //навешивание обработчиков
    document.addEventListener('dragstart', dragstart);
    document.addEventListener('dragover', dragover);
    document.addEventListener('drop', drop);
    document.addEventListener('dragend', dragend);

    function dragstart(e) {
        item = e.target;
        e.dataTransfer.setData('text', '');
    }

    function dragover(e) {
        if (item) e.preventDefault();
    }	

    function drop(e){
        let target_zone = e.target.closest('.dropZone')
        if (target_zone) {
            target_zone.appendChild(item);
            e.preventDefault();
        }
    }

    function dragend(e) {
        item = null;
    }
}








