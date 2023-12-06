
cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite, // Kéo và thả Sprite vào từ trình chỉnh sửa
        highlightedScale: 1.2, // Tăng kích thước khi nổi bật
        originalScale: 1.0, // Kích thước ban đầu
    },

    onLoad() {
        // Thêm sự kiện click cho Sprite Node
        this.node.on(cc.Node.EventType.TOUCH_START, this.onSpriteClicked, this);
    },

    onSpriteClicked() {
        // cc.game.emit("sendSpriteData", { spriteFrame: this.sprite.spriteFrame });
        cc.systemEvent.emit('sendSpriteFrameEvent', this.sprite.spriteFrame);
        
        // Hiệu ứng nổi bật khi nhấn vào Sprite
        this.node.scale = this.highlightedScale;

        // Gán một hàm callback để khôi phục kích thước ban đầu sau một khoảng thời gian
        this.scheduleOnce(() => {
            this.node.scale = this.originalScale;
        }, 0.75); // 0.1 giây, bạn có thể điều chỉnh thời gian theo ý muốn
    },

    // Các phương thức khác của component
    // ...

});
