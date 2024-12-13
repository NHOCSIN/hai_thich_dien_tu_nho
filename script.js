// Hàm phát nhạc
function playMusic() {
  const music = document.getElementById("music");
  music.play();
}

// Hàm tạo thông báo ngẫu nhiên
function generateRandomNotifications() {
  playMusic(); // Phát nhạc khi tạo thông báo

  const totalNotifications = 500; // Tăng tổng số thông báo lên 500
  let counter = 0; // Biến đếm số lượng thông báo đã tạo

  // Hàm tạo thông báo theo thời gian
  const interval = setInterval(() => {
    if (counter >= totalNotifications) {
      clearInterval(interval); // Dừng tạo khi đủ số thông báo
    }

    const notification = document.createElement("div");
    notification.className = "notification";

    // Header thông báo
    const header = document.createElement("div");
    header.className = "notification-header";
    header.innerHTML = "<span>Tràn ngập bộ</span>";

    // Nội dung thông báo
    const message = document.createElement("p");
    message.innerText = "Nhớ nhớ nhớ em!";

    notification.appendChild(header);
    notification.appendChild(message);

    // Vị trí ngẫu nhiên cho thông báo
    notification.style.left = Math.random() * (window.innerWidth - 240) + "px"; // Giới hạn trái phải
    notification.style.top = Math.random() * (window.innerHeight - 160) + "px";  // Giới hạn trên dưới

    document.body.appendChild(notification);

    counter++; // Tăng số lượng thông báo đã tạo
  }, 90); // Tạo mỗi thông báo cách nhau 90ms (nhanh hơn)
}