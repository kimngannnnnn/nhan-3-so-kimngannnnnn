// index.js

const readline = require('readline');

// Tạo interface để đọc dữ liệu từ terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hàm nhập vào 3 số và tính tích của chúng
function multiplyThreeNumbers() {
  rl.question('Nhập số thứ nhất: ', (input1) => {
    rl.question('Nhập số thứ hai: ', (input2) => {
      rl.question('Nhập số thứ ba: ', (input3) => {
        const number1 = parseFloat(input1);
        const number2 = parseFloat(input2);
        const number3 = parseFloat(input3);

        // Kiểm tra xem đầu vào có phải là số hợp lệ hay không
        if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
          const product = number1 * number2 * number3;
          console.log(`Tích của ${number1}, ${number2} và ${number3} là: ${product}`);
          rl.close();
        } else {
          console.log('Vui lòng nhập các số hợp lệ.');
          // Nếu đầu vào không hợp lệ, yêu cầu nhập lại các số
          multiplyThreeNumbers();
        }
      });
    });
  });
}

// Bắt đầu chương trình
multiplyThreeNumbers();
