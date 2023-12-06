import { AccountManager } from "./AccountManager";
cc.Class({
    extends: cc.Component,

    properties: {
        avatarLayout: cc.Node,  // Thành phần layout chứa avatar
        createAccountButton: cc.Button,  // Nút tạo tài khoản
    },

    onLoad() {
        this.accountManager = new AccountManager();
        
        this.createAccountButton.interactable = false;  // Bắt đầu với nút bị vô hiệu hóa
        this.registerAvatarClickEvent();
    },

    registerAvatarClickEvent() {
        // Lặp qua tất cả các sprite con của layout và đăng ký sự kiện cho chúng
        this.avatarLayout.children.forEach((avatarSprite) => {
            avatarSprite.on(cc.Node.EventType.TOUCH_START, this.onAvatarClick, this);
        });
    },

    onAvatarClick(event) {
        // Lấy tên của avatar được chọn
        const selectedAvatarName = event.currentTarget;
        cc.log("type ", typeof selectedAvatarName)
        cc.log('Selected Avatar:', selectedAvatarName);

        // Cho phép nút tạo tài khoản
        this.createAccountButton.interactable = true;
        // this.accountManager.setAvatar(this.accountManager.getCurrentAccount()[0],selectedAvatarName)
        // // Ghi tên avatar đã chọn vào LocalStorage hoặc nơi bạn lưu trữ dữ liệu
        // this.accountManager.setCurrentAccount(this.accountManager.getCurrentAccount()[0],this.accountManager.getCurrentAccount()[1], selectedAvatarName)
        cc.log("Tài khoản hiện tại", this.accountManager.getCurrentAccount())
    },

    start() {
        // Đặt sự kiện cho nút tạo tài khoản
        this.createAccountButton.node.on(cc.Node.EventType.TOUCH_START, this.onCreateAccountClick, this);
        // let images = this.avatarLayout.children;
        // images.forEach((image) => {
        //     image.on(cc.Node.EventType.MOUSE_DOWN, this.onAvatarClick, this);
        // });

    },

    onCreateAccountClick() {
        // Xử lý khi nút tạo tài khoản được nhấn, chẳng hạn chuyển scene
        if (this.createAccountButton.interactable){
            
            cc.log('Create Account Button Clicked!');
            cc.director.loadScene("playForm");
        }

        // Chuyển scene hoặc thực hiện hành động mong muốn ở đây
    },
});
