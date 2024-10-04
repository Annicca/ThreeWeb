import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import {TodoList} from './pages/TodoList.jsx';
import {Counter} from './pages/Counter.jsx';
import { NotFound } from './pages/_404.jsx';

import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/todo" component={TodoList} />
					<Route path="/counter" component={Counter} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
