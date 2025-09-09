import { CSSProperties, useState } from 'react';
import { Article } from '../components/article/Article';
import { ArticleParamsForm } from '../components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from '../constants/articleProps';
import '../styles/index.scss';
import styles from '../styles/index.module.scss';

export const App = () => {
	const [currentState, setCurrentState] =
		useState<ArticleStateType>(defaultArticleState);

	const handleApply = (newState: ArticleStateType) => {
		setCurrentState(newState);
	};

	const handleReset = () => {
		setCurrentState(defaultArticleState);
	};

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': currentState.fontFamilyOption.value,
					'--font-size': currentState.fontSizeOption.value,
					'--font-color': currentState.fontColor.value,
					'--container-width': currentState.contentWidth.value,
					'--bg-color': currentState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				currentState={currentState}
				onApply={handleApply}
				onReset={handleReset}
			/>
			<Article />
		</main>
	);
};
