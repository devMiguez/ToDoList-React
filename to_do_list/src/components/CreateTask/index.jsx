import './style.css'

export default function CreateTask(props){

    return(
        <div className="create">
            <h1 className="sub_title">Create task: </h1>

            <input type="text" placeholder="Enter the task..." />

            <div className="choose_category">

                <label for="categoryTask">Choose a category: </label>
                <select name="category" id="categoryTask">
                    <option value="choose">Categories:</option>
                    <option value="study">Study</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>

            </div>

            <div className="btn">
                <button>Create</button>
            </div>
        </div>
    );

}