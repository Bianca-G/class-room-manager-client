import './App.css';
import IndexPage from './pages/index/index-page';
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
