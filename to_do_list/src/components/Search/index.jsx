import './style.css'

export default function Search(props){

    return(
        <>
            <div className="search_item">
                <h1 className='sub_title'>Search task: </h1>
                <input type="text" placeholder="Search your task..."/>
            </div>
        </>
    );

}