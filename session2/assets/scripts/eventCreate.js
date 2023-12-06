

// import { AccountManager } from "./AccountManager";

// cc.Class({
//     extends: cc.Component,

//     properties: {
//         btnCreate: cc.Button,
//         layoutAvatar: cc.Layout,
//     },

//     onLoad: function () {
//         this.btnCreate.node.on('click', this.onButtonClick, this);
//         this.btnCreate.interactable = false;

//         this.edtUsername.node.on('text-changed', this.onUsernameChanged, this);

//         // Tạo instance của AccountManager
//         this.accountManager = new AccountManager();
//     },

//     onButtonClick: function (event) {
//         // Lấy tên đăng nhập và mật khẩu từ ô nhập liệu
//         const username = this.edtUsername.string;
//         const password = this.edtPassword.string;

//         // Lưu vào LocalStorage thông qua AccountManager
//         if (this.accountManager.checkLogin(username, password)) {
//             // Chuyển sang cảnh mới
//             cc.director.loadScene('avatarForm', function () {
//                 cc.log('Scene switched successfully');
//             });
//         }else{
//             cc.log("Username or password not correct")
//         }
//     },

//     onUsernameChanged: function (event) {
//         this.btnLogin.interactable = event.string !== '';
//     },
// });



import { AccountManager } from "./AccountManager";
cc.Class({
    extends: cc.Component,

    properties: {
        btnCreate: {
            default: null,
            type: cc.Button
        },
        layoutAvatar: {
            default: null,
            type: cc.Node
        },
    },

    onLoad() {
        this.accountManager = new AccountManager();
        // Disable button ban đầu
        this.btnCreate.interactable = false;

        
    },

    onImageClick(event) {
        // Enable button khi người dùng click vào ảnh
        this.btnCreate.interactable = true;
        // Lấy tên của ảnh đã click
        const imageName = event.target;
        cc.log("type"+typeof imageName)
        console.log("Ảnh đã được click là: ", imageName);
        // console.log("Username", this.accountManager.getCurrentAccount()[0])
        // this.accountManager.setAvatar(this.accountManager.getCurrentAccount()[0],imageName)
        
        // cc.log(this.accountManager.setAvatar(this.accountManager.getCurrentAccount()[0],imageName))
        // cc.log("Tài khoản hiện tại", this.accountManager.getCurrentAccount())
    },

    onCreateButtonClick() {
        // Trong Scene hiện tại, khi bạn muốn chuyển đến Scene mới
        
        // cc.director.loadScene("NewScene");

        // Chuyển sang scene khác khi người dùng click vào button
        cc.director.loadScene("playForm");
        // cc.director.loadScene('playForm', function () {
        //     cc.log('Scene switched successfully');
        // });
    },
    onUpdate(){
        // Thêm EventListener cho mỗi ảnh trong layout
        let images = this.layoutAvatar.children;
        images.forEach((image) => {
            image.on(cc.Node.EventType.MOUSE_DOWN, this.onImageClick, this);
        });

        // Thêm EventListener cho button
        this.btnCreate.node.on(cc.Node.EventType.MOUSE_DOWN, this.onCreateButtonClick, this);
    }

    // Rest of your code...
});
