import React, { useState, useEffect } from 'react';
import { DEFAULT_UPPERCASE } from '../utils/data';

function Uppercase() {
    const [letters, setletters] = useState(DEFAULT_UPPERCASE);
    const [current, setcurrent] = useState(0);

    let timeout = 0;

    useEffect(() => {
        // Runs on component mounting
        setcurrent(getLetter());
    }, []);

    let getLetter = (defaults) => {
        let index = Math.floor(Math.random() * (25 - 0 + 1) + 0);
        let currentLetters = defaults || letters;
        if (currentLetters[index].flag === true) {
            timeout++;
            if (timeout > 200) {
                return -1;
            }
            return getLetter(currentLetters);
        } else {
            timeout = 0;
            return currentLetters[index].value;
        }
    };

    function correct() {
        const updatedletters = letters.map((letter, i) => {
            if (letter.value === current) {
                // Update the letter
                letter.flag = true;
                return letter;
            } else {
                // The rest haven't changed
                return letter;
            }
        });
        setletters(updatedletters);

        // reselect current lettergetLetter
        let nextLetter = getLetter();
        setcurrent(nextLetter);

        if (nextLetter === -1) {
            setcurrent('Congratulations!!');
        }
    }

    function incorrect() {
        setcurrent(getLetter());
    }

    let reset = function () {
        let defaults = DEFAULT_UPPERCASE();
        setletters(defaults);
        let nextLetter = getLetter(defaults);
        setcurrent(nextLetter);
    };

    return (
        <div className="content">
            <h1>Uppercase</h1>
            <hr />
            <div id="letters">
                {letters.map(function (letter, i) {
                    return (
                        <span className={letter.flag ? 'correct' : ''} key={i}>
                            {letter.value}
                        </span>
                    );
                })}
            </div>
            <div
                id="screen"
                className={current === 'Congratulations!!' ? 'done' : ''}
            >
                {current}
            </div>
            <button className="correct" onClick={correct}>
                Right
            </button>
            <button className="wrong" onClick={incorrect}>
                Wrong
            </button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Uppercase;
