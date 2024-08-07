import logo from './utils/abc-logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Uppercase from './routes/Uppercase';
import Lowercase from './routes/Lowercase';
import SightWords from './routes/SightWords';

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
                                to="/sight-words-1"
                            >
                                Sight Words Level 1
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/sight-words-2"
                            >
                                Sight Words Level 2
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/sight-words-3"
                            >
                                Sight Words Level 3
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/sight-words-4"
                            >
                                Sight Words Level 4
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/sight-words-5"
                            >
                                Sight Words Level 5
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/sight-words-6"
                            >
                                Sight Words Level 6
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/sight-words-7"
                            >
                                Sight Words Level 7
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/sight-words-8"
                            >
                                Sight Words Level 8
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-white color-white-hover padding-20"
                                to="/sight-words-9"
                            >
                                Sight Words Level 9
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main id="main">
                <Routes>
                    <Route path="/uppercase" element={<Uppercase />} />{' '}
                    {/* 👈 Renders at /#/app/ */}
                    <Route path="/lowercase" element={<Lowercase />} />
                    <Route
                        path="/sight-words-1"
                        element={<SightWords number={1} />}
                    />
                    <Route
                        path="/sight-words-2"
                        element={<SightWords number={2} />}
                    />
                    <Route
                        path="/sight-words-3"
                        element={<SightWords number={3} />}
                    />
                    <Route
                        path="/sight-words-4"
                        element={<SightWords number={4} />}
                    />
                    <Route
                        path="/sight-words-5"
                        element={<SightWords number={5} />}
                    />
                    <Route
                        path="/sight-words-6"
                        element={<SightWords number={6} />}
                    />
                    <Route
                        path="/sight-words-7"
                        element={<SightWords number={7} />}
                    />
                    <Route
                        path="/sight-words-8"
                        element={<SightWords number={8} />}
                    />
                    <Route
                        path="/sight-words-9"
                        element={<SightWords number={9} />}
                    />
                </Routes>
            </main>
            <footer id="footer"></footer>
        </div>
    );
}

export default App;
