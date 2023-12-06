cc.Class({
    extends: cc.Component,

    properties: {
        spriteNode: cc.Sprite,
    },

    onLoad() {
        // Lấy đường dẫn và UUID của ảnh
        var uuid = "945173e5-c3ae-4e3a-8c2f-a55119a9bcd6";
        var imagePath = "db://assets/img/avatar/1.png";
        var sprite = 0

        // Sử dụng cc.loader.load để tải hình ảnh
        cc.loader.load({uuid: uuid, type: 'png'}, function(err, texture) {
            if (!err) {
                // Tạo sprite từ texture đã tải
                sprite = new cc.Sprite(texture);
                cc.log("OK", sprite)
                // Thêm sprite vào màn hình hoặc làm bất kỳ thao tác nào khác bạn cần
                // this.addChild(sprite);
                this.spriteNode.spriteFrame = sprite;
            } else {
                cc.error("Error loading image:", err);
                cc.log("NONO")
            }
        }.bind(this));
        

        cc.log("ẢNH: ", sprite)
        this.spriteNode.spriteFrame = sprite;
        var imagePath = "db://assets/img/avatar/1.png";
        var imageUUID = "94UXPlw65OOowvpVEZqbzW";

        console.log("Start loading image...");

        // // Load ảnh bằng UUID
        // cc.loader.load({uuid: imageUUID}, (err, texture) => {
        //     console.log("Image loaded.");

        //     if (err) {
        //         cc.error(err.message || err);
        //         return;
        //     }

        //     // Tạo một SpriteFrame từ texture
        //     var spriteFrame = new cc.SpriteFrame(texture);

        //     // Gán SpriteFrame mới cho Sprite
            

        //     console.log("SpriteFrame assigned successfully.");
        // });
    },

    start() {
        console.log("Script started.");
        // TODO: Your start logic here
    },
});
