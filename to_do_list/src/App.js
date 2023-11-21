import './App.css';
import Search from './components/Search'
import Filter from './components/Filter'
import BoxList from './components/BoxList'
import CreateTask from './components/CreateTask'

function App() {
  return (
    <main id="container_principal">
        
        <section className='content_main'>

            <div className='title'> 
              <h1>todo<span>-list</span></h1>
            </div>

            <div className='search'>

              <Search />

            </div>

            <div className='filter'>

              <Filter />

            </div>

            <div className='box_list'>

              <BoxList />

            </div>

            <div className='create_task'>
              
              <CreateTask />

            </div>

        </section>

    </main>
  );
}

export default App;
