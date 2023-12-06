

import { AccountManager } from "./AccountManager";

cc.Class({
    extends: cc.Component,

    properties: {
        btnLogin: cc.Button,
        edtUsername: cc.EditBox,
        edtPassword: cc.EditBox,
    },

    onLoad: function () {
        this.btnLogin.node.on('click', this.onButtonClick, this);
        this.btnLogin.interactable = false;

        this.edtUsername.node.on('text-changed', this.onUsernameChanged, this);

        // Tạo instance của AccountManager
        this.accountManager = new AccountManager();
    },

    onButtonClick: function (event) {
        // Lấy tên đăng nhập và mật khẩu từ ô nhập liệu
        const username = this.edtUsername.string;
        const password = this.edtPassword.string;

        // Lưu vào LocalStorage thông qua AccountManager
        if (this.accountManager.checkLogin(username, password)) {
            // Chuyển sang cảnh mới
            this.accountManager.setCurrentAccount(username, password)
            cc.director.loadScene('playForm', function () {
                cc.log('Scene switched successfully');
            });
        }else{
            cc.log("Username or password not correct")
        }
    },

    onUsernameChanged: function (event) {
        this.btnLogin.interactable = event.string !== '';
    },
});
