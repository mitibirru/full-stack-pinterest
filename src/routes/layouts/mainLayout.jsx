import React from 'react';
import LeftBar from '../../components/leftBar/leftBar';
import TopBar from '../../components/topBar/topBar';
import styles from './mainLayout.module.css';
import { Outlet } from 'react-router';

const MainLayout = () => {
	return (
		<div className={styles['app']}>
			<LeftBar />
			<div className={styles['content']}>
				<TopBar />
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
