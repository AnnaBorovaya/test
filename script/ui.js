class Ui {
    constructor() {
        this.container_backLog = document.querySelector('.container-backLog')
        this.container_todo = document.querySelector('.container-todo')
    }

    set_backlog(elem) {
        this.container_backLog.insertAdjacentHTML('afterbegin', Ui.template(elem))
    }

    set_todo(elem) {
        this.container_todo.insertAdjacentHTML('afterbegin', Ui.template(elem))
    }
    
    static template(elem) {
        return `
            <div class="card objects mb-3">
                <div class="card-body">
                    <h5 class=${elem.id===1?'text-warning card-title':'text-info card-title'}>${elem.title}</h5>
                    <hr>
                    <div class="content-under-line">
                        <div class="content first-line">
                            <span>Priority</span>
                            <span>${elem.priority}</span>
                        </div>
                        <div class="content second-line">
                            <span>RAG</span>
                            <div class="circle-group">
                                <span class="circle circle-active"></span>
                                <span class="circle"></span>
                                <span class="circle"></span>
                            </div>
                        </div>
                        <div class="content third-line">
                            <span>Assigned to</span>
                            <span>${elem.assigned_to}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

const ui = new Ui()