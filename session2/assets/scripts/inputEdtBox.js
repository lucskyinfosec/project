cc.Class({
    extends: cc.Component,

    properties: {
        myEditBox: cc.EditBox, // Kết nối EditBox của bạn thông qua trình chỉnh sửa trình biên dịch
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // Đăng ký sự kiện khi người dùng thay đổi nội dung trong EditBox
        this.myEditBox.node.on('text-changed', this.onEditBoxTextChanged, this);
        
    },

    start() {
        // Khởi tạo EditBox (nếu cần)
        // this.myEditBox.string = "Initial Text";
    },

    // Sự kiện được gọi khi nội dung trong EditBox thay đổi
    onEditBoxTextChanged(editbox, customEventData) {
        // Kiểm tra xem nút space có được nhấn hay không
        if (editbox.string.includes(' ')) {
            // Nút space đã được nhấn
            console.log("Space key pressed!");
        }
    },

    // update(dt) {},
});
