import './App.css';
import CreateTask from './components/CreateTask'

function App() {
  return (
    <main id="container_principal">
        
        <section className='content_main'>

            <div className='title'> 
              <h1>todo<span>-list</span></h1>
            </div>

            <div className='search'>

            </div>

            <div className='filter'>

            </div>

            <div className='box_list'>

            </div>

            <div className='create_task'>
              
              <CreateTask />

            </div>

        </section>

    </main>
  );
}

export default App;
