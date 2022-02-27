import React from 'react'
import { Link } from 'react-router-dom';
const Nav = ( search, setSearch) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault}>
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
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Post</Link></li>
        <li><Link to='/'>About</Link></li>


      </ul>

    </nav>
  )
}

export default Nav