// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
// import image3 from '../assets/fortnite_logo_fortnite_icon_transparent_free_png.webp';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <h1>Tony's Page</h1>
     {/* <img src={image3} alt="Description of image 1"/> */}
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
