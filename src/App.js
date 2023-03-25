import NavBar from "./Navbar";
import ThemeProvider from "./ThemeProvider";
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/">
              <Route index element={<Home />}/>
              <Route path="about" element={<About />}/>
              <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
