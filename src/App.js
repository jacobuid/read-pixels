import logo from './utils/abc-logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Uppercase from './routes/Uppercase';
import Lowercase from './routes/Lowercase';

function App() {
    return (
        <div className="app">
            <header className="header background-dark-90 clearfix">
                <div className="col-lg-4">
                    <img
                        src={logo}
                        id="logo"
                        className="width-60 inline-block margin-0 margin-y-5 margin-x-20"
                        alt="logo"
                    />
                    <span
                        id="name"
                        className="inline-block font-30 padding-y-15"
                    >
                        read pixels
                    </span>
                </div>
                <div className="col-lg-8 clearfix">
                    <ul className="nav font-14 font-poppins clearfix margin-0 padding-0 pull-right-lg">
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/uppercase"
                            >
                                Uppercase Letters
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/lowercase"
                            >
                                Lowercase Letters
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/sight-words"
                            >
                                Sight Words
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/sight-words-2"
                            >
                                Sight Words 2
                            </Link>
                        </li>
                        <li>
                            <a
                                className="color-white color-white-hover padding-20"
                                href="http://www.youtube.com"
                            >
                                Videos
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <main id="main">
                <Routes>
                    <Route path="/uppercase" element={<Uppercase />} />{' '}
                    {/* 👈 Renders at /#/app/ */}
                    <Route path="/lowercase" element={<Lowercase />} />
                </Routes>
            </main>
            <footer id="footer"></footer>
        </div>
    );
}

export default App;
