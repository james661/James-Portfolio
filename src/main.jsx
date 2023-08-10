
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import About from '****';
// import Contact from '***';
// import Portfolio from '***';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
        ],
    },
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React>
// );