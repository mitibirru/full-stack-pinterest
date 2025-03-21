import LeftBar from './components/leftBar/leftBar';
import styles from './app.module.css';
import TopBar from './components/topBar/topBar';
import Gallery from './components/gallery/gallery';

const App = () => {
	return (
		<div className={styles['app']}>
			<LeftBar />
			<div className={styles['content']}>
				<TopBar />
				<Gallery />
			</div>
		</div>
	);
};

export default App;
