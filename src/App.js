import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');//('')is the default search input
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Laid back in the whip",
      datetime: "February 10, 2010 11:11:11 PM",
      body: "With some cake and a beat."
    }
  ])
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <Header title="Gabe's Blog" />
      <Nav search={search} setSearch={setSearch}/>
      <Switch>
        <Route exact path='/'>
          <Home posts={posts}/>
        </Route>
        
        <Route exact path='/post'>
          <NewPost />
        </Route>
        <Route path='/post/:id'>
          <PostPage />
        </Route>
        <Route path='/about' component={About}/>

        <Route path='/*' component={Missing}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
