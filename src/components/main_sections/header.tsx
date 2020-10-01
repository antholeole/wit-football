import React from 'react'

function Header(): JSX.Element {
    return (
        <div className="logo">
            <img className="logo__img" src={process.env.PUBLIC_URL + '/logo.png'} />
            <h1 className="logo__text">FOOTBALL WIT</h1>
        </div>
    )
}

export default Header