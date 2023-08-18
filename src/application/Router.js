import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PicturesPage from '../pages/picturesPage/PicturesPage';
import FavoritesPage from '../pages/favoritesPage/FavoritesPage';
import PicturePage from '../pages/picturePage/PicturePage';
import GrayscalePage from '../pages/grayscalePage/GrayscalePage';


const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/favorites",
      element: <FavoritesPage/>
    },
    {
      path: '/list',
      element: <PicturesPage/> 
    },
    {
      path: '/image',
      element: <PicturePage/>
    },
    //crea la ruta que te falta   

    {
      path: '/grayscale',
      element: <GrayscalePage />,
    },
]);


export default Router;