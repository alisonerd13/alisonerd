import styles from './i18n.module.scss';

/* eslint-disable-next-line */
export interface I18nProps {}

export function I18n(props: I18nProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to I18n!</h1>
    </div>
  );
}

export default I18n;
