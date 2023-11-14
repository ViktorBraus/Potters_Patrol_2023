//          <Route path='/registry' component={Regisgtry} />
//<Route path='/login' component={Login} />
import { useAuth0 } from "@auth0/auth0-react";
import * as React from 'react';
import { Modal } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/adminPage/Layout';
import './App.css';
import { AddBook } from './components/adminPage/AddBook';
import { AddGame } from './components/adminPage/AddGame';
import { AddMovie } from './components/adminPage/AddMovie';
import { FetchBook } from './components/adminPage/FetchBook';
import { FetchGame } from './components/adminPage/FetchGame';
import { FetchMovie } from './components/adminPage/FetchMovie';
import { FetchForum } from './components/adminPage/FetchForum';
import { FetchMessages } from './components/adminPage/FetchMessages';
import Login from './components/Authentication/Login/Login';
import Regisgtry from './components/Authentication/Registry/Registry';
import { Books } from './components/content/Books';
import { Content } from './components/content/content';
import { Games } from './components/content/Games';
import { Movies } from './components/content/Movies';
import about from './About';
import { Home } from './components/Home/Home';
import { HomeAfter } from './components/Home/HomeAfter';
import {Profile} from './components/profile/Profile';
import { FacultyTest } from "./components/test/FacultyTest";
import { MainTest } from './components/test/MainTest';
import { PatronusTest } from "./components/test/PatronusTest";
import { Result } from "./components/test/result";
import { WandTest } from "./components/test/WandTest";
import { TestSection } from "./components/test/TestSection";
import footer from './footer';
import { NavBar } from './navbar';
import { ForumBlock } from './components/Forum/forumpage';
import { CreateDiscussion } from './components/Forum/CreateDiscussion';
import { Messages } from './components/Forum/Messages';
const App = () => {
  const { isAuthenticated } = useAuth0();
  const content = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/addMovie' component={AddMovie} />
                <Route path='/addBook' component={AddBook} />
                <Route path='/addGame' component={AddGame} />
                <Route path='/fetchbook' component={FetchBook} />
                <Route path='/fetchmovie' component={FetchMovie} />
                <Route path='/fetchgame' component={FetchGame} />
                <Route path='/fetchForum' component={FetchForum} />
                <Route path='/messages_/edit/:forumid' component={FetchMessages} />
                <Route path='/Layout' component={Layout} />
                <Route path='/Book/edit/:bookid' component={AddBook} />
                <Route path='/Movie/edit/:movieid' component={AddMovie} />
                <Route path='/Game/edit/:gameid' component={AddGame} />
                <Route path='/content/books/:bookid' component={Content} />
                <Route path='/content/games/:gameid' component={Content} />
                <Route path='/content/movies/:movieid' component={Content} />
                <Route path='/About' component={about} />
                <Route path='/Books' component={Books} />
                <Route path='/Games' component={Games} />
                <Route path='/Movies' component={Movies} />
                <Route path='/HomeAfter' component={HomeAfter} />
                <Route path='/Test/entring/:testId' component={MainTest} />
                <Route path='/Home' component={Home} />
                <Route path='/testSection/entering/:testid' component={MainTest} />
                <Route path='/faculty' component={FacultyTest} />
                <Route path='/testSection' component={TestSection} />
                <Route path='/wand' component={WandTest} />
                <Route path='/result' component={Result} />
                <Route path='/patronus' component={PatronusTest} />
                <Route path='/profile' component={Profile} />
                <Route path='/forum' component={ForumBlock} />
                <Route path='/createDiscussion' component={CreateDiscussion} />
                <Route path='/messages/:forumid' component={Messages} />
                <Route path='/' component={isAuthenticated ? HomeAfter : Home} />
            </Switch>
        </BrowserRouter>
    );
  }
  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <meta charSet="utf-8" />
      </head>
      <NavBar/>
      <main>
        {content()}
      </main>
      {footer()}
    </div>
  )
}
export default App;