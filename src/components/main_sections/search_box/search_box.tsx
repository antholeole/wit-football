import React, { createRef, useState } from 'react'
import ResizeableBox from './helpers/reizeable_box'

interface ISearchBoxProps {
    onSearch: (p0: string) => void
}

function SearchBox(props: ISearchBoxProps): JSX.Element {
    const { onSearch } = props

    return (
        <div className="search">
            <div className="search__search_container">
                <ResizeableBox placeholder="Ask me anything about football"
                    onSubmit={onSearch}
                    className='search__search_container__search_box' />
            </div>
        </div>
    )
}

export default SearchBox