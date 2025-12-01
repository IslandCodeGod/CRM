# Trae CRM - Hệ thống quản lý quan hệ khách hàng

🌐 [English](README_en.md) • [中文](README_zh.md) • [Deutsch](README_de.md) • [Español](README_es.md) • [Français](README_fr.md) • [Italiano](README_it.md) • [日本語](README_ja.md) • [한국어](README_ko.md) • [Nederlands](README_nl.md) • [Polski](README_pl.md) • [Português](README_pt.md) • [Русский](README_ru.md) • [العربية](README_ar.md) • [हिन्दी](README_hi.md) • [Svenska](README_sv.md) • [ไทย](README_th.md) • [Türkçe](README_tr.md) • [Tiếng Việt](README_vi.md)

## 📋 Tổng quan dự án

Trae CRM là một hệ thống quản lý quan hệ khách hàng (CRM) mã nguồn mở được thiết kế cho các doanh nghiệp nhỏ và vừa. Nó cung cấp các chức năng đầy đủ để quản lý khách hàng, cơ hội bán hàng, khách hàng tiềm năng và các hoạt động theo dõi, giúp các doanh nghiệp cải thiện kết quả bán hàng và sự hài lòng của khách hàng.

## ✨ Tính năng chính

- 🎯 **Quản lý khách hàng**: Thêm, chỉnh sửa, tìm kiếm và quản lý thông tin khách hàng
- 📊 **Bảng điều khiển**: Hiển thị thống kê bán hàng và các chỉ số quan trọng
- 💰 **Cơ hội bán hàng**: Theo dõi cơ hội bán hàng quaорон tuyến bán hàng
- 📈 **Quản lý khách hàng tiềm năng**: Quản lý khách hàng tiềm năng và tỷ lệ chuyển đổi
- 📞 **Liên hệ**: Sắp xếp các liên hệ khách hàng
- 📝 **Công việc**: Lập kế hoạch và quản lý các hoạt động và theo dõi
- 🔐 **Kiểm soát truy cập**: Xác thực an toàn với vai trò người dùng

## 🛠️ Công nghệ sử dụng

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Python, Flask
- **Cơ sở dữ liệu**: SQLite
- **Kiến trúc**: MVC (Model-View-Controller)

## 🚀 Hướng dẫn nhanh

### Yêu cầu hệ thống

- Python 3.8+
- pip (trình quản lý gói Python)

### Cài đặt

1. Sao chép kho lưu trữ
   ```bash
   git clone https://github.com/yourusername/trae_crm.git
   cd trae_crm
   ```

2. Cài đặt các phụ thuộc
   ```bash
   pip install -r requirements.txt
   ```

3. Khởi động ứng dụng
   ```bash
   python run.py
   ```

4. Mở trình duyệt và truy cập `http://localhost:5000`

### Tài khoản kiểm tra

- **Tên người dùng**: admin
- **Mật khẩu**: admin123

## 📁 Cấu trúc dự án

```
trae_crm/
├── app/
│   ├── __init__.py          # Khởi tạo ứng dụng Flask
│   ├── models/              # Mô hình dữ liệu (ORM)
│   ├── routes/              # Định nghĩa tuyến (trình điều khiển)
│   ├── static/              # Tệp tĩnh (CSS, JS, hình ảnh)
│   ├── templates/           # Mẫu HTML
│   └── utils/               # Công cụ và hàm trợ giúp
├── config.py                # Cấu hình ứng dụng
├── run.py                   # Điểm vào chính
├── requirements.txt         # Phụ thuộc dự án
└── README.md                # Tài liệu dự án
```

## 📖 Hướng dẫn sử dụng

### 1. Bảng điều khiển

Bảng điều khiển cung cấp tổng quan về các chỉ số quan trọng của doanh nghiệp của bạn:

- **Thống kê bán hàng**: Tổng số khách hàng, khách hàng tiềm năng, cơ hội và doanh thu dự kiến
- **Quy trình bán hàng**: Hiển thị tiến trình của cơ hội bán hàng qua các bước
- **Chỉ số quan trọng**: Khách hàng mới trong tháng này, tỷ lệ chuyển đổi, v.v.
- **Hoạt động gần đây**: Các hoạt động và công việc gần đây

![Dashboard](screenshots/dashboard.png)

### 2. Quản lý khách hàng

- **Thêm khách hàng**: Điền biểu mẫu để thêm khách hàng mới
- **Danh sách khách hàng**: Hiển thị tất cả khách hàng với tùy chọn lọc và sắp xếp
- **Chi tiết khách hàng**: Hiển thị và chỉnh sửa thông tin khách hàng
- **Tìm kiếm khách hàng**: Tìm khách hàng theo tên, email hoặc số điện thoại

### 3. Cơ hội bán hàng

- **Thêm cơ hội**: Tạo cơ hội bán hàng mới
- **Quy trình bán hàng**: Theo dõi trạng thái của các cơ hội qua các bước
- **Đánh giá cơ hội**: Gán giá trị và xác suất đóng cho các cơ hội
- **Dự đoán doanh thu**: Tính toán doanh thu dự kiến từ các cơ hội bán hàng

### 4. Quản lý khách hàng tiềm năng

- **Thêm khách hàng tiềm năng**: Chỉ định khách hàng tiềm năng mới
- **Chất lượng**: Đánh giá và phân loại khách hàng tiềm năng
- **Chuyển đổi**: Theo dõi việc chuyển đổi khách hàng tiềm năng thành khách hàng
- **Phân tích**: Hiển thị thống kê chuyển đổi

### 5. Liên hệ

- **Quản lý liên hệ**: Sắp xếp các liên hệ khách hàng
- **Thông tin liên hệ**: Số điện thoại, email, địa điểm, v.v.
- **Phân loại**: Phân loại các liên hệ để truy cập dễ dàng

### 6. Công việc

- **Tạo công việc**: Lập kế hoạch cho các cuộc họp, cuộc gọi hoặc công việc
- **Hạn chót**: Chỉ định hạn chót cho các công việc
- **Hoàn thành**: Đánh dấu các công việc đã hoàn thành
- **Hiển thị**: Hiển thị các công việc trong danh sách hoặc lịch

## ❓ Câu hỏi thường gặp

**Câu hỏi: Tôi có thể thay đổi cơ sở dữ liệu từ SQLite sang MySQL/PostgreSQL không?**
Trả lời: Có, bạn có thể sửa đổi các cài đặt trong tệp `config.py` để sử dụng cơ sở dữ liệu khác.

**Câu hỏi: Làm cách nào để thêm vai trò người dùng mới?**
Trả lời: Bạn có thể sửa đổi mô hình User trong `app/models/user.py` và thêm các vai trò mới.

**Câu hỏi: Tôi có thể tùy chỉnh giao diện không?**
Trả lời: Có, bạn có thể sửa đổi các mẫu HTML trong `app/templates/` và các tệp CSS trong `app/static/css/`.

## 🛠️ Phát triển

### Môi trường phát triển

1. Tạo môi trường ảo
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

2. Cài đặt các phụ thuộc phát triển
   ```bash
   pip install -r requirements.txt
   ```

3. Chạy ứng dụng trong chế độ phát triển
   ```bash
   python run.py
   ```

### Đóng góp

1. Fork kho lưu trữ
2. Tạo nhánh cho tính năng của bạn (`git checkout -b feature/AmazingFeature`)
3. Commit các thay đổi của bạn (`git commit -m 'Add some AmazingFeature'`)
4. Push lên nhánh (`git push origin feature/AmazingFeature`)
5. Mở một Pull Request

## 📋 Các công việc được lên kế hoạch

- [ ] Tích hợp API email và SMS
- [ ] Thêm các chức năng báo cáo nâng cao
- [ ] Triển khai xuất dữ liệu (Excel, PDF)
- [ ] Thêm thông báo đẩy
- [ ] Cải thiện giao diện di động

## 📄 Giấy phép

Dự án này được cấp phép theo Giấy phép MIT - Xem [LICENSE](LICENSE) để biết thêm chi tiết.

## 📞 Liên hệ

- **Dự án**: [Trae CRM](https://github.com/yourusername/trae_crm)
- **Email**: your.email@example.com
- **Vấn đề**: [Báo cáo một vấn đề](https://github.com/yourusername/trae_crm/issues)

---

Cảm ơn bạn đã chọn Trae CRM! 🎉