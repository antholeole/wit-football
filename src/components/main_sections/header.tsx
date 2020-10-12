import React from 'react'

function Header(): JSX.Element {
    return (
        <>
            <div className="logo">
                <img className="logo__img" src={process.env.PUBLIC_URL + '/logo.png'} />
                <h1 className="logo__text">FOOTBALL WIT</h1>
            </div>
            <div className="pretext">
                <p>Try:</p>
                <ul>
                    <li>"How many players were on the New England Revolution in 2012?"</li>
                    <li>"There were 15 players on the New England Revolution in 2016."</li>
                    <li>"When did the 2015 season start for the revs?"</li>
                </ul>
            </div>
        </>
    )
}

export default Header