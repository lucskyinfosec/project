cc.Class({
    extends: cc.Component,

    properties: {
        spr: cc.Sprite,
    },

    onLoad() {
        // Lấy thông tin cần thiết từ SpriteFrame
        var spriteFrameInfo = {
            name: this.spr.spriteFrame.name,
            // Các thông tin khác mà bạn muốn lưu
        };

        // Chuyển đổi thông tin thành chuỗi JSON
        var spriteFrameInfoJSON = JSON.stringify(this.spr);

        // Lưu chuỗi JSON vào localStorage
        cc.sys.localStorage.setItem('spriteFrameInfo', spriteFrameInfoJSON);
    },

    start() {
        // Để tái tạo SpriteFrame từ thông tin lưu trữ
        // var spriteFrameInfoJSON = cc.sys.localStorage.getItem('spriteFrameInfo');
        // if (spriteFrameInfoJSON) {
        //     var spriteFrameInfo = JSON.parse(spriteFrameInfoJSON);

        //     // Tái tạo SpriteFrame
        //     var recreatedSpriteFrame = new cc.SpriteFrame(spriteFrameInfo.name);

        //     // Gán SpriteFrame cho Sprite
        //     this.spr.spriteFrame = recreatedSpriteFrame;
        // }
    },
});
