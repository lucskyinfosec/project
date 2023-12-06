// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import { AccountManager } from "./AccountManager";
cc.Class({
    extends: cc.Component,

    properties: {
        labelPickAvatar: cc.Label,
    },
    onLoad: function () {
        this.accountManager = new AccountManager();
        // Đăng ký lắng nghe sự kiện
        this.labelPickAvatar.string = "Wellcome "+this.accountManager.getCurrentAccount()[0];
        // cc.log("WELLCOME "+ this.accountManager.getCurrentAccount()[0]+"  "+this.accountManager.getCurrentAccount()[1])
        // cc.director.on('login-event', this.onLoginEvent, this);
    },

    // onLoginEvent: function (event) {
    //     // const username = event.detail.username;
    //     // const password = event.detail.password;
        
    //     this.labelPickAvatar.string = "Wellcome "+this.accountManager.username.toString();
    //     // cc.log("WELLCOME "+ this.accountManager.username+"  "+this.accountManager.password)
    //     // Sử dụng thông tin tài khoản ở đây
    // },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
