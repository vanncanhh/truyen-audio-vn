DROP DATABASE IF EXISTS web_doc_truyen;
CREATE DATABASE web_doc_truyen CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE web_doc_truyen;

/*Kieu truyen*/
CREATE TABLE KieuTruyen (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    TenKieuTruyen VARCHAR(100) NOT NULL
);

/*Thể loại */
CREATE TABLE TheLoai (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    TenTheLoai VARCHAR(100) NOT NULL,
    MoTa TEXT,
    ID_KieuTruyen INT,
    FOREIGN KEY (ID_KieuTruyen) REFERENCES KieuTruyen(ID) ON DELETE SET NULL
);

/*Bộ truyện */
CREATE TABLE BoTruyen (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    TenTruyen VARCHAR(255) NOT NULL,
    MoTaNgan TEXT,
    MoTaDai TEXT,
    TimePhatHanh DATETIME,
    TongView INT DEFAULT 0,
    TrangThai ENUM('Đang ra', 'Hoàn thành', 'Tạm ngưng') DEFAULT 'Đang ra'
);

/*Chapter */
CREATE TABLE Chapter (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    TenChapter VARCHAR(255) NOT NULL
);

/*Chi tiết bộ truyện */
CREATE TABLE ChiTiet_BoTruyen (
    ID_BoTruyen INT,
    ID_Chapter INT,
    FileTruyen TEXT,
    TimeCapNhat DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID_BoTruyen, ID_Chapter),
    FOREIGN KEY (ID_BoTruyen) REFERENCES BoTruyen(ID) ON DELETE CASCADE,
    FOREIGN KEY (ID_Chapter) REFERENCES Chapter(ID) ON DELETE CASCADE
);

/* người dùng */
CREATE TABLE NguoiDung (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    HoTen VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    SDT VARCHAR(20),
    Avatar TEXT,
    CapDo ENUM('User', 'Admin', 'Mod') DEFAULT 'User'
);

/*Đánh giá */
CREATE TABLE DanhGia (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Sao INT CHECK (Sao BETWEEN 1 AND 5),
    Comment TEXT,
    ID_NguoiDung INT,
    ID_BoTruyen INT,
    FOREIGN KEY (ID_NguoiDung) REFERENCES NguoiDung(ID) ON DELETE CASCADE,
    FOREIGN KEY (ID_BoTruyen) REFERENCES BoTruyen(ID) ON DELETE CASCADE
);

/*Lịch chiếu */
 CREATE TABLE LichChieu (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ThoiGianChieu DATETIME NOT NULL,
    ID_BoTruyen INT,
    FOREIGN KEY (ID_BoTruyen) REFERENCES BoTruyen(ID) ON DELETE CASCADE
);

/*Chi tiết thể loại */
CREATE TABLE ChiTiet_TheLoai (
    ID_BoTruyen INT,
    ID_TheLoai INT,
    PRIMARY KEY (ID_BoTruyen, ID_TheLoai),
    FOREIGN KEY (ID_BoTruyen) REFERENCES BoTruyen(ID) ON DELETE CASCADE,
    FOREIGN KEY (ID_TheLoai) REFERENCES TheLoai(ID) ON DELETE CASCADE
);

