import { createRef, useState } from 'react';
import TopicSearch from './components/TopicSearch.jsx';

function App() {
  const refSearch = createRef()
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = () => {
    setSearchValue(refSearch.current?.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="topic-input">
          Enter topic to search
          <input type="text" ref={refSearch} id="topic-input" />
        </label>
        <button type="button" value="Search" onClick={() => handleSearch(refSearch.current?.value)}>Search</button>
      </form>

      <TopicSearch value={searchValue} />
    </div>
  );
}

export default App;
