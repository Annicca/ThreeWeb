import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/todo" class={url == '/todo' && 'active'}>
					Todo
				</a>
				<a href="/todosignals" class={url == '/todosignals' && 'active'}>
					Todo with siganls
				</a>
				<a href="/404" class={url == '/404' && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}
