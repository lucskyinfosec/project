cc.Class({
    extends: cc.Component,

    properties: {
        wordPrefab: {
            default: null,
            type: cc.Prefab
        },
        wordLayout: {
            default: null,
            type: cc.Layout
        },
        words: {
            default: [],
            type: [cc.String]
        },
        currentWordIndex: 0,
        inputEditBox: {
            default: null,
            type: cc.EditBox
        }
    },

    start() {
        this.createWords();
        this.updateWordHighlight();
        this.node.on(cc.Node.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    createWords() {
        for (let i = 0; i < 20; i++) {
            let wordNode = cc.instantiate(this.wordPrefab);
            let wordEditBox = wordNode.getComponent(cc.EditBox);
            wordEditBox.placeholder = this.getRandomWord();
            wordEditBox.inputFlag = cc.EditBox.InputFlag.LOWERCASE;
            wordEditBox.enabled = false; // Disable input initially
            this.wordLayout.node.addChild(wordNode);
            this.words.push(wordEditBox.placeholder);
        }
    },

    updateWordHighlight() {
        for (let i = 0; i < this.wordLayout.node.children.length; i++) {
            let wordNode = this.wordLayout.node.children[i];
            let wordEditBox = wordNode.getComponent(cc.EditBox);
            if (i === this.currentWordIndex) {
                wordEditBox.node.color = cc.Color.GRAY;
                wordEditBox.enabled = true; // Enable input for the current word
            } else if (i < this.currentWordIndex) {
                // Correct words
                wordEditBox.node.color = cc.Color.GREEN;
                wordEditBox.enabled = false; // Disable input for correct words
            } else {
                // Yet to be typed words
                wordEditBox.node.color = cc.Color.WHITE;
                wordEditBox.enabled = false; // Disable input for upcoming words
            }
        }
    },

    onKeyDown(event) {
        if (event.keyCode === cc.macro.KEY.space) {
            this.checkInput();
        }
    },

    checkInput() {
        let currentWord = this.words[this.currentWordIndex];
        let currentInput = this.inputEditBox.string.toLowerCase();

        if (currentInput === currentWord) {
            this.currentWordIndex++;
            this.inputEditBox.string = '';
            this.updateWordHighlight();

            if (this.currentWordIndex === this.words.length) {
                this.showResult();
            }
        } else {
            // Handle incorrect input
            this.inputEditBox.string = '';
        }
    },

    showResult() {
        // Calculate and display the result
        let correctCount = this.words.filter((word, index) => index < this.currentWordIndex).length;
        cc.log(`Correct words: ${correctCount}/${this.words.length}`);
    },

    getRandomWord() {
        // You should implement your logic to get random words here
        // For simplicity, I'm using a static array of words
        let wordList = ["apple", "banana", "orange", "grape", "kiwi", "strawberry", "melon", "cherry", "blueberry", "pineapple"];
        let randomIndex = Math.floor(Math.random() * wordList.length);
        return wordList[randomIndex];
    }
});
