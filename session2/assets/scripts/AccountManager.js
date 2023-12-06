export class AccountManager {
    constructor() {
        // Kiểm tra xem cc.sys.localStorage có sẵn hay không
        if (cc.sys.localStorage) {
            // Đọc danh sách tài khoản từ LocalStorage
            this.accountList = cc.sys.localStorage.getItem('accountList');

            if (!this.accountList) {
                this.accountList = [];
            } else {
                this.accountList = JSON.parse(this.accountList);
            }
        } else {
            cc.error('LocalStorage is not available.');
        }
    }
    

    // Thêm tài khoản mới vào danh sách và lưu vào LocalStorage
    addAccount(username, password, avatar=null) {
        const newAccount = { username, password, avatar};
        this.accountList.push(newAccount);

        // Kiểm tra xem cc.sys.localStorage có sẵn hay không
        if (cc.sys.localStorage) {
            cc.sys.localStorage.setItem('accountList', JSON.stringify(this.accountList));
        } else {
            cc.error('LocalStorage is not available.');
        }
    }
    getAvatar(username) {
        // Lặp qua danh sách tài khoản để kiểm tra thông tin đăng nhập
        for (let i = 0; i < this.accountList.length; i++) {
            const account = this.accountList[i];
            if (account.username === username ) {
                return this.accountList[i].avatar
            }
        }
        cc.log('Đăng nhập thất bại!');
        return false; // Trả về false nếu không tìm thấy thông tin đăng nhập
    }
    setAvatar(username, newAvatar) {
        console.log('Before update:', this.accountList);
        for (let i = 0; i < this.accountList.length; i++) {
            const account = this.accountList[i];
            if (account.username === username) {
                this.accountList[i].avatar = newAvatar;
    
                // Update the accountList in LocalStorage
                this.updateLocalStorage();
    
                console.log('After update:', this.accountList);
                return true;
            }
        }
    
        console.log("Set avatar loi");
        return false;
    }
    
    
    // Add a helper function to update the accountList in LocalStorage
    updateLocalStorage() {
        if (cc.sys.localStorage) {
            cc.sys.localStorage.setItem('accountList', JSON.stringify(this.accountList));
        } else {
            cc.error('LocalStorage is not available.');
        }
    }
    
    

    // Kiểm tra thông tin đăng nhập
    checkLogin(username, password) {
        // Lặp qua danh sách tài khoản để kiểm tra thông tin đăng nhập
        for (let i = 0; i < this.accountList.length; i++) {
            const account = this.accountList[i];
            if (account.username === username && account.password === password) {
                cc.log('Đăng nhập thành công!');
                return true; // Trả về true nếu thông tin đăng nhập đúng
            }
        }

        cc.log('Đăng nhập thất bại!');
        return false; // Trả về false nếu không tìm thấy thông tin đăng nhập
    }
    setCurrentAccount(username, password, avatar=null){
        cc.sys.localStorage.setItem('currentUsername', username);
        cc.sys.localStorage.setItem('currentPassword', password);
        cc.sys.localStorage.setItem('currentAvatar', avatar);
        // get the parameter 
        // let username = cc.sys.localStorage.getItem(key);

        // remove the item of the key (username)
        // cc.sys.localStorage.removeItem(key);
        // cc.sys.localStorage.clear();
    }
    getCurrentAccount(){
        // cc.sys.localStorage.sItem('currentUsername', username);
        // cc.sys.localStorage.setItem('currentPassword', password);
        // get the parameter 
        let username = cc.sys.localStorage.getItem('currentUsername');
        let password = cc.sys.localStorage.getItem('currentPassword');
        let avatar = cc.sys.localStorage.getItem('currentAvatar');

        // cc.sys.localStorage.removeItem("currentUsername");
        // cc.sys.localStorage.removeItem("currentPassword");
        return [username, password, avatar]
        // cc.sys.localStorage.clear();
    }
}
