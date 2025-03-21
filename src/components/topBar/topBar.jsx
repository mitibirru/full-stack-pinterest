import UserButton from '../userButton/userButton';
import styles from './topBar.module.css';

const TopBar = () => {
	return (
		<div className={styles['topBar']}>
			{/* search */}
			<div className={styles['search']}>
				<img src="/general/search.svg" alt="" />
				<input type="text" placeholder="Search" />
			</div>

			{/* user */}
			<UserButton />
		</div>
	);
};

export default TopBar;
