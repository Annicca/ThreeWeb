import { render } from 'preact';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import './style.scss';

export function App() {
	return (
		<RouterProvider router={router} />
	);
}

render(<App />, document.getElementById('app'));