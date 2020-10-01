import React, { useState } from 'react'
import Header from './components/main_sections/header'
import Query from './components/main_sections/query/query'
import SearchBox from './components/main_sections/search_box/search_box'
import './styles/main.scss'

function App(): JSX.Element {
  const [query, setQuery] = useState('')

  return (
    <div className="App">
      <Header />
      <Query query={query} />
      <SearchBox onSearch={setQuery} />
    </div>
  )
}

export default App
