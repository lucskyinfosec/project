var randomWords = require('@proto.email/random-words');

cc.Class({
    extends: cc.Component,

    properties: {
        prefabWord: cc.Prefab,
        layoutContainer: cc.Layout,
        editBox: cc.EditBox,
        indexWord: 0,
        score:0,
        time: cc.Sprite,
    },

    start() {
        const words = randomWords(20);

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const labelNode = cc.instantiate(this.prefabWord);
            const labelComponent = labelNode.getComponent(cc.Label);

            if (labelComponent) {
                labelComponent.string = word;
                this.layoutContainer.node.addChild(labelNode);
            } else {
                cc.error('Label component not found in the prefab. Make sure to assign a Label in the prefab.');
            }
        }

        this.layoutContainer.spacingX = 10;
        this.layoutContainer.updateLayout();
        this.editBox.node.on('editing-did-ended', this.onEditBoxEditingDidEnd, this);
        this.editBox.node.on('text-changed', this.onEditBoxChanged, this);
    },
    onEditBoxEditingDidEnd() {
        // Lấy chuỗi đang hiển thị trong EditBox
        const currentText = this.editBox.string;

        // Kiểm tra xem chuỗi có kết thúc bằng khoảng trắng không
        if (currentText.charAt(currentText.length - 1) === ' ') {
            // Xóa nội dung EditBox
            this.editBox.string = '';
        }
    },
    onEditBoxChanged() {
        cc.log("OKK");
        let enterText = this.editBox.string;
        if (enterText.charAt(enterText.length - 1) === " ") {
            this.editBox.string=''
            this.editBox.blur();
            this.editBox.focus();
            let wordNode = this.layoutContainer.node.children[this.indexWord];

            // Lấy labelComponent từ wordNode thay vì từ this
            let labelComponent = wordNode.getComponent(cc.Label);

            cc.log("OK ", labelComponent);
            cc.log(labelComponent.string + " va " + enterText.slice(0, -1));
            if (labelComponent.string === enterText.slice(0, -1)) {
                labelComponent.node.color = cc.Color.GREEN;
                this.score+=1
                cc.sys.localStorage.setItem('score', this.score);

            } else {
                labelComponent.node.color = cc.Color.RED;
            }
            
            
            this.indexWord += 1;
            if (this.indexWord==20){
                cc.director.loadScene('resultForm', function () {
                    cc.log('Scene switched successfully');
                });
            }
        }
    },
});
