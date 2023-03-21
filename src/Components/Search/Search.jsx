import { useState,useEffect } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Search() {
    const [products,setproducts]=useState([])


    useEffect(()=>{
        fetch('/Products.json')
        .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                setproducts(res);
            })
    },[])
  // note: the id field is mandatory
  const items = products;

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        
        <span style={{ display: 'block', textAlign: 'left' }}>{item.title}</span>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            fuseOptions={{ keys: ["title"] }}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            showItemsOnFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default Search