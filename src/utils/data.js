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
function DEFAULT_SIGHT_WORDS(number) {
    if (number === 9) {
        return [
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
        ];
    } else if (number === 8) {
        return [
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
            { value: 'aaa', flag: false },
        ];
    } else if (number === 7) {
        return [
            { value: 'could', flag: false },
            { value: 'no', flag: false },
            { value: 'make', flag: false },
            { value: 'than', flag: false },
            { value: 'first', flag: false },
            { value: 'been', flag: false },
            { value: 'its', flag: false },
            { value: 'who', flag: false },
            { value: 'now', flag: false },
            { value: 'people', flag: false },
            { value: 'my', flag: false },
            { value: 'made', flag: false },
        ];
    } else if (number === 6) {
        return [
            { value: 'so', flag: false },
            { value: 'these', flag: false },
            { value: 'would', flag: false },
            { value: 'other', flag: false },
            { value: 'into', flag: false },
            { value: 'has', flag: false },
            { value: 'more', flag: false },
            { value: 'two', flag: false },
            { value: 'like', flag: false },
            { value: 'him', flag: false },
            { value: 'see', flag: false },
            { value: 'time', flag: false },
        ];
    } else if (number === 5) {
        return [
            { value: 'which', flag: false },
            { value: 'what', flag: false },
            { value: 'where', flag: false },
            { value: 'will', flag: false },
            { value: 'about', flag: false },
            { value: 'up', flag: false },
            { value: 'one', flag: false },
            { value: 'them', flag: false },
            { value: 'then', flag: false },
            { value: 'many', flag: false },
            { value: 'some', flag: false },
        ];
    } else if (number === 4) {
        return [
            { value: 'his', flag: false },
            { value: 'her', flag: false },
            { value: 'do', flag: false },
            { value: 'if', flag: false },
            { value: 'all', flag: false },
            { value: 'not', flag: false },
            { value: 'or', flag: false },
            { value: 'your', flag: false },
            { value: 'this', flag: false },
            { value: 'that', flag: false },
            { value: 'on', flag: false },
            { value: 'use', flag: false },
        ];
    } else if (number === 3) {
        return [
            { value: 'how', flag: false },
            { value: 'had', flag: false },
            { value: 'there', flag: false },
            { value: 'their', flag: false },
            { value: 'they', flag: false },
            { value: 'were', flag: false },
            { value: 'have', flag: false },
            { value: 'from', flag: false },
            { value: 'each', flag: false },
            { value: 'word', flag: false },
            { value: 'said', flag: false },
            { value: 'when', flag: false },
        ];
    } else if (number === 2) {
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
    } else {
        // DEFAULT Sight Words 1
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
}

function YOUTUBE_URLS(number) {
    if (number === 9) {
        return '';
    } else if (number === 8) {
        return '';
    } else if (number === 7) {
        return {
            link: 'https://youtu.be/GHN6bbcseuU',
            embed: 'https://www.youtube.com/embed/GHN6bbcseuU',
        };
    } else if (number === 6) {
        return {
            link: 'https://youtu.be/BMH8CBNgo8w',
            embed: 'https://www.youtube.com/embed/BMH8CBNgo8w',
        };
    } else if (number === 5) {
        return {
            link: 'https://youtu.be/6pQvG6kZUTs',
            embed: 'https://www.youtube.com/embed/6pQvG6kZUTs',
        };
    } else if (number === 4) {
        return {
            link: 'https://youtu.be/XChcUZHW_SM',
            embed: 'https://www.youtube.com/embed/XChcUZHW_SM',
        };
    } else if (number === 3) {
        return {
            link: 'https://youtu.be/xi8U7bCOm6c',
            embed: 'https://www.youtube.com/embed/xi8U7bCOm6c',
        };
    } else if (number === 2) {
        return {
            link: 'https://youtu.be/E0vWOwIflTs',
            embed: 'https://www.youtube.com/embed/E0vWOwIflTs',
        };
    } else {
        return {
            link: 'https://youtu.be/gIZjrcG9pW0',
            embed: 'https://www.youtube.com/embed/gIZjrcG9pW0',
        };
    }
}

// 👇️ named exports
export {
    DEFAULT_UPPERCASE,
    DEFAULT_LOWERCASE,
    DEFAULT_SIGHT_WORDS,
    YOUTUBE_URLS,
};
