import React from 'react'

export default function Header() {
    return (
        <section className='header'>
            
            <h3 className='header__text'>Matt Canavan</h3>

            <ul className='header__navcontainer'>
                <li>
                    <a href='#about'
                    className='header__navlink'
                    >About</a>
                </li>

                <li>
                    <a href='#projects'
                    className='header__navlink'
                    >Projects</a>
                </li>
            </ul>

        </section>

    )
}
