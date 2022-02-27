import React from 'react'
import { Link } from 'react-router-dom';
const Nav = ({ search, setSearch}) => {
  return (
    <nav className='Nav'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/post'>Post</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">
          Search My Stuff.. if you dare
        </label>
        <input 
          id="search"
          type='text'
          placeholder='Peep Here'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      

    </nav>
  )
}

export default Nav