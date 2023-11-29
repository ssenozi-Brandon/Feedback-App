import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from './components/header'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App(){

  return (
    <FeedbackProvider>

    <Router>
    <Header />
      <div className="container">
    
    <Routes>
        <Route exact path='/' element={
          <>
            <FeedbackForm  />
            <FeedbackStats />
            <FeedbackList  />
          </>
        } >
    </Route>
        <Route path='/about' element={<AboutPage />}> this is me</Route>
     </Routes>

     <AboutLink />
      </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App;


