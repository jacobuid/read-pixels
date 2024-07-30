function DEFAULT_UPPERCASE() {
    return [
        { value: 'A', flag: false },
        { value: 'B', flag: false },
        { value: 'C', flag: false },
        { value: 'D', flag: false },
        { value: 'E', flag: false },
        { value: 'F', flag: false },
        { value: 'G', flag: false },
        { value: 'H', flag: false },
        { value: 'I', flag: false },
        { value: 'J', flag: false },
        { value: 'K', flag: false },
        { value: 'L', flag: false },
        { value: 'M', flag: false },
        { value: 'N', flag: false },
        { value: 'O', flag: false },
        { value: 'P', flag: false },
        { value: 'Q', flag: false },
        { value: 'R', flag: false },
        { value: 'S', flag: false },
        { value: 'T', flag: false },
        { value: 'U', flag: false },
        { value: 'V', flag: false },
        { value: 'W', flag: false },
        { value: 'X', flag: false },
        { value: 'Y', flag: false },
        { value: 'Z', flag: false },
    ];
}

function DEFAULT_LOWERCASE() {
    return [
        { value: 'a', flag: false },
        { value: 'b', flag: false },
        { value: 'c', flag: false },
        { value: 'd', flag: false },
        { value: 'e', flag: false },
        { value: 'f', flag: false },
        { value: 'g', flag: false },
        { value: 'h', flag: false },
        { value: 'i', flag: false },
        { value: 'j', flag: false },
        { value: 'k', flag: false },
        { value: 'l', flag: false },
        { value: 'm', flag: false },
        { value: 'n', flag: false },
        { value: 'o', flag: false },
        { value: 'p', flag: false },
        { value: 'q', flag: false },
        { value: 'r', flag: false },
        { value: 's', flag: false },
        { value: 't', flag: false },
        { value: 'u', flag: false },
        { value: 'v', flag: false },
        { value: 'w', flag: false },
        { value: 'x', flag: false },
        { value: 'y', flag: false },
        { value: 'z', flag: false },
    ];
}
function DEFAULT_SIGHT_WORDS_ONE() {
    return [
        { value: 'an', flag: false },
        { value: 'at', flag: false },
        { value: 'be', flag: false },
        { value: 'we', flag: false },
        { value: 'to', flag: false },
        { value: 'the', flag: false },
        { value: 'is', flag: false },
        { value: 'it', flag: false },
        { value: 'in', flag: false },
        { value: 'are', flag: false },
        { value: 'you', flag: false },
    ];
}

function DEFAULT_SIGHT_WORDS_TWO() {
    return [
        { value: 'for', flag: false },
        { value: 'by', flag: false },
        { value: 'as', flag: false },
        { value: 'of', flag: false },
        { value: 'he', flag: false },
        { value: 'she', flag: false },
        { value: 'was', flag: false },
        { value: 'with', flag: false },
        { value: 'but', flag: false },
        { value: 'can', flag: false },
        { value: 'I', flag: false },
        { value: 'a', flag: false },
    ];
}

function DEFAULT_SIGHT_WORDS_THREE() {
    return [
        { value: 'oh', flag: false },
        { value: 'boy', flag: false },
        { value: 'they', flag: false },
        { value: 'there', flag: false },
        { value: 'two', flag: false },
        { value: 'said', flag: false },
        { value: 'girl', flag: false },
        { value: 'little', flag: false },
        { value: 'her', flag: false },
        { value: 'does', flag: false },
        { value: 'goes', flag: false },
    ];
}

function YOUTUBE_URL(number) {
    if (number === 9) {
        return '';
    } else if (number === 8) {
        return '';
    } else if (number === 7) {
        return '';
    } else if (number === 6) {
        return '';
    } else if (number === 5) {
        return '';
    } else if (number === 4) {
        return '';
    } else if (number === 3) {
        return '';
    } else if (number === 2) {
        return 'https://youtu.be/E0vWOwIflTs';
    } else {
        return 'https://youtu.be/gIZjrcG9pW0';
    }
}

// 👇️ named exports
export {
    DEFAULT_UPPERCASE,
    DEFAULT_LOWERCASE,
    DEFAULT_SIGHT_WORDS_ONE,
    DEFAULT_SIGHT_WORDS_TWO,
    DEFAULT_SIGHT_WORDS_THREE,
    YOUTUBE_URL,
};
