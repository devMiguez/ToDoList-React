import './style.css'

export default function Filter(props){

    return(
        <div className="filter_itens">
            <h1 className="sub_title">Filter: </h1>

            <div className="content_filter">

                <label for="statusTask">Status: </label>
                <select name="status" id="statusTask">
                    <option value="all">All tasks</option>
                    <option value="Complete">Complete</option>
                    <option value="todo">ToDo</option>
                </select>

            </div>
            
        </div>
    );

}