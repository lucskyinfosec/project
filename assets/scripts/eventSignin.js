// cc.Class({
//     extends: cc.Component,

//     properties: {
//         // Thêm một thuộc tính để giữ cảnh hiện tại
//         currentScene: {
//             default: null,
//             type: cc.Scene,
//         },
//     },

//     // LIFE-CYCLE CALLBACKS:

//     onLoad() {
//         // Gán cảnh hiện tại cho thuộc tính currentScene khi script được nạp
//         this.currentScene = cc.director.getScene();
//     },

//     start() {
//         // Thêm một button vào scene và gán sự kiện nhấn cho button
//         this.addSwitchSceneButton();
//     },

//     // Hàm thêm button vào scene
//     addSwitchSceneButton() {
//         var self = this;

//         var button = new cc.Node('SwitchSceneButton');
//         var buttonLabel = button.addComponent(cc.Label);
//         buttonLabel.string = 'Chuyển cảnh';

//         button.on('touchend', function () {
//             // Gọi hàm để chuyển cảnh khi button được nhấn
//             self.switchScene();
//         });

//         button.parent = this.node;
//     },

//     // Hàm chuyển cảnh
//     switchScene() {
//         // Kiểm tra cảnh hiện tại và chuyển sang cảnh mới
//         if (this.currentScene.name === 'avatarForm') {
//             cc.director.loadScene('loginForm');
//         } else {
//             cc.director.loadScene('avatarForm');
//         }
//     },

//     // update (dt) {},
// });


import { AccountManager } from "./AccountManager";

cc.Class({
    extends: cc.Component,

    properties: {
        btnSignin: cc.Button,
        edtUsername: cc.EditBox,
        edtPassword: cc.EditBox,
    },

    onLoad: function () {
        // cc.sys.localStorage.clear();
        this.btnSignin.node.on('click', this.onButtonClick, this);
        this.btnSignin.interactable = false;

        this.edtUsername.node.on('text-changed', this.onUsernameChanged, this);

        // Tạo instance của AccountManager
        this.accountManager = new AccountManager();
    },

    onButtonClick: function (event) {
        // Lấy tên đăng nhập và mật khẩu từ ô nhập liệu
        const username = this.edtUsername.string;
        const password = this.edtPassword.string;
        

        // Lưu vào LocalStorage thông qua AccountManager
        this.accountManager.addAccount(username, password);
        // cc.director.emit('login-event', { username, password });
        this.accountManager.setCurrentAccount(username, password)

        cc.log("username:",username)
        cc.log("password:",password)
        cc.log("HIHI",this.accountManager.getCurrentAccount().toString())
        // Chuyển sang cảnh mới
        cc.director.loadScene('avatarForm', function () {
            cc.log('Scene switched successfully');
        });
    },

    onUsernameChanged: function (event) {
        this.btnSignin.interactable = event.string !== '';
    },
});
