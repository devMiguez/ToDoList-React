import './style.css'

export default function BoxList(props) {
    return (
        <div className="tasks_box">
            <div className="name-task">
                <h1>Nome tarefa</h1>
                <p>(categoria)</p>
            </div>

            <div className="btns">

                <button className="btn-done">Done</button>
                <button className="btn-x">x</button>

            </div>
        </div>
    );
}