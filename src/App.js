import Router from './routes';
import './globals.scss';
import styles from './app.module.scss';

function App() {
  return (
    <div className={ styles.app }>
      <Router />
    </div>
  );
}

export default App;
