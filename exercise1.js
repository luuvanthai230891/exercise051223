// Viết 1 chương trình nhập các lựa chọn
// 1.Nhập thông tin user: name, email, password và lưu vào trong mảng
// 2.In ra thông tin mảng người dùng ra bên ngoài 
// 3. Nhập tên ng dùng từ trình duyệt và tìm kiếm tên ng đó có trong mảng k
// 4.Thoát ct
// 5.các trường hợp còn lại thông báo nhập sai lựa chọn
let = choose;
const users = [];
const addUser = () => {
    const userName = prompt("Mời bạn nhập tên");
    const email = prompt("Mời bạn nhập email");
    const password = prompt("Mời bạn nhập password");
    
    const user = {
        userName : userName,
        email : email,
        password: password,
    };
    // thêm phần tử vào mảng
    user.push(users)
};
/**
 * Đọc danh sách user
 * @param {*} array Mảng user
 */
const readUser = (array) => {
    for (let i = 0; i < array.length; i++){
        console.log("Danh sách user: " , array[i]);
    }
};
 /**
  * Hàm tìm kiếm user theo tên
  * @param {*} inputValue Tên lấy từ ng dùng
  * @param {*} array mảng chứa danh sáhc user
  * @returns tra về index nếu như tìm thấy user, -1 nếu không tìm thấy 
  * Auth: NVQ(04/12/22023)
  */ 
const handleSearch = (inputValue, array) => {
    for (let i = 0; i < array.length; i++){
        if (array[i].userName === inputValue) {
            return i;//trả về vị trí tìm thấy
        } else {
            return -1;//Nếu k tìm thấy
        }
    }
};    

   do { choose = +prompt("Mời bạn nhập lựa chọn");
    
    switch (choose) {
        case 1:
            // Gọi hàm được
            addUser();
            break;
        case 2:
            // Gọi hàm read User
            readUser(users)
            break;
        case 3:
            const nameSearch = prompt("Nhập tên tìm kiếm: ");
            //biến lưu trữ giá trị trả về từ hàm handleSearch
            const result = handleSearch(nameSearch, users);
            if(result !== -1){
                console.log(`${nameSearch} xuất hiện tại vị trí thứ ${result}`);
            }else {
                console.log(`Không tìm thấy tên ${nameSearch}`);
            }
            break;
        default:
            break;
    }
} while (choose !== 4);
