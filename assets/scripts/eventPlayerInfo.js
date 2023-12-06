import { AccountManager } from "./AccountManager";
cc.Class({
    extends: cc.Component,

    properties: {
        spriteAvatar: cc.Sprite,
        labelUsername: cc.Label,
        newImagePath: undefined, // Remove null
    },

    onLoad() {
        this.accountManager = new AccountManager();
        let account = this.accountManager.getCurrentAccount();
        cc.log("account ở playInfo:", account);
        this.labelUsername.string = account[0];
        this.newImagePath = account[2];
        
        this.changeSpriteImage();
    },

    changeSpriteImage() {
        // var self = this;
        // var path = "test assets/img/avatar/" + this.newImagePath;
        
        // cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) {
        //     if (!err) {
        //         // Set the new spriteFrame for the spriteAvatar
        //         self.spriteAvatar.spriteFrame = spriteFrame;
        //     } else {
        //         cc.error("Failed to load new image:", err);
        //     }
        // });
        // Trong Scene mới, khi Scene được khởi tạo
        cc.systemEvent.on('sendSpriteFrameEvent', this.onReceiveSpriteFrame, this);

        // var self = this;
        // var url = "assets/img/avatar/" + this.newImagePath
        // cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
        // var node = new cc.Node("New Sprite");
        // var sprite = node.addComponent(cc.Sprite);
        // sprite.spriteFrame = spriteFrame;
        // node.parent = self.node
        // });
    },
    onReceiveSpriteFrame(spriteFrame) {
        // Xử lý sprite frame nhận được
        if (this.spriteAvatar) {
            this.spriteAvatar.spriteFrame = spriteFrame;
        }
    },
    

    start() {
        // ...
    },
});
