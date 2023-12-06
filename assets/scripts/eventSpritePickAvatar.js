cc.Class({
    extends: cc.Component,

    properties: {
        // Thêm Sprite cho ảnh vào properties (chọn thông qua Editor)
        imageSprite: {
            default: null,
            type: cc.Sprite
        }
    },

    onLoad() {
        // Thêm EventListener cho Sprite
        this.node.on(cc.Node.EventType.TOUCH_END, this.onImageClick, this);
    },

    onImageClick(event) {
        // Xử lý sự kiện khi người dùng click vào ảnh
        console.log("Ảnh đã được click!",this.node.name);
    },

    onDestroy() {
        // Gỡ bỏ EventListener khi đối tượng bị hủy
        this.node.off(cc.Node.EventType.TOUCH_END, this.onImageClick, this);
    }
});
