import styles from './interface.module.scss';

/* eslint-disable-next-line */
export interface InterfaceProps {}

export function Interface(props: InterfaceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Interface!</h1>
    </div>
  );
}

export default Interface;
