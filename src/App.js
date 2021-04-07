import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home, About, LoginHome,Profile, FollowerProfile, Bookshelf, Categories, Comics, Computer, Cooking, Crime, History, Kids, Romance,Sports, Travel,ReadBooks, Footer, ArtMusic, Biographies, Business, Education, Health, FlagBooks, CategoriesLogin, BookDetails, Followers,AddBook, BookDetailsLogin} from "./pages";
import SignIn from './components/Form/SignIn/SignIn';
import SignUp from './components/Form/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          
          <Route path="/about" exact component={() => <About />} />
          <Route path="/loginHome" exact component={() => <LoginHome />} />
          <Route path="/profile" exact component={() => <Profile />} />
          <Route path="/followers" exact component={() => <Followers />} />
          
          <Route path="/followerProfile" exact component={() => <FollowerProfile />} />

          <Route path="/categories" exact component={() => <Categories />} />
          <Route path="/categoriesLogin" exact component={() => <CategoriesLogin />} />
          
          <Route path="/artMusic" exact component={() => <ArtMusic />} />
          <Route path="/biographies" exact component={() => <Biographies />} />
          <Route path="/business" exact component={() => <Business />} />
          <Route path="/comics" exact component={() => <Comics />} />
          <Route path="/computer" exact component={() => <Computer />} />
          <Route path="/cooking" exact component={() => <Cooking />} />
          <Route path="/crime" exact component={() => <Crime />} />
          <Route path="/education" exact component={() => <Education />} />
          <Route path="/health" exact component={() => <Health />} />
          <Route path="/history" exact component={() => <History />} />
          <Route path="/kids" exact component={() => <Kids />} />
          <Route path="/romance" exact component={() => <Romance />} />
          <Route path="/sports" exact component={() => <Sports />} />
          <Route path="/travel" exact component={() => <Travel />} />
                
          <Route path="/bookshelf" exact component={() => <Bookshelf />} />
          <Route path="/flagbooks" exact component={() => <FlagBooks />} />
          <Route path="/readBooks" exact component={() => <ReadBooks />} />
          
          <Route path="/bookDetails" exact component={() => <BookDetails />} />
          <Route path="/bookDetailsLogin" exact component={() => <BookDetailsLogin />} />
          <Route path="/addBook" exact component={() => <AddBook />} />
          
          
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
