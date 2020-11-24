import React from 'react'
import SiteSearch from './SiteSearch'

const PageHeader = () => {
    return (
        <header className="header-top">
            <div className="wrapper">
                <img src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/25508048_305987333231774_5760533749749073875_n.png?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=QUnxK9tPuwUAX836GVN&_nc_ht=scontent.fmmx3-1.fna&oh=a5ffb3150ee55c8c99bd5193ff48f625&oe=5FE43FCE" className="logo" alt="logo" />
                <nav className="navigation">
                    <ul className="links">
                        <li>Byxor</li>
                        <li>T-Shirt</li>
                        <li>Tröja</li>
                    </ul>
                </nav>
                <SiteSearch />
            </div>
        </header>
    );
};

export default PageHeader;
