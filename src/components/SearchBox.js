import React from 'react'

function SearchBox(props) {
  return (
    <div className='col col-sm-4'>
        <input type="text" className='form-control' onChange={(e) => props.setSearch(e.target.value)} value={props.search} placeholder="Type to search..."/>
    </div>
  )
}

export default SearchBox