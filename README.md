## WhatsApp Klonu
Bu proje, bir tam yığın (full-stack) WhatsApp klonudur. Kullanıcı yönetimi, mesajlaşma ve API hizmetleri gibi temel özellikleri içerir, ancak gerçek zamanlı mesajlaşma (real-time) özelliği bulunmamaktadır. Proje, hem ön yüzü (frontend) hem de arka yüzü (backend) ayrı ayrı yöneterek ölçeklenebilir ve modüler bir yapı sunar.

## Kullanılan Teknolojiler
## Frontend:
React: Kullanıcı arayüzünü oluşturmak için.

Redux: Uygulama durum yönetimini sağlamak için.

Vite: Hızlı geliştirme ortamı ve derleme için.

Tailwind CSS: Hızlı ve modern arayüz tasarımı için.

## Backend:
Node.js: Sunucu tarafı uygulaması için.

Express.js: API uç noktalarını ve sunucu mantığını yönetmek için.

Mongoose: MongoDB veritabanı ile etkileşim kurmak için.

Firebase: Belirli hizmetler (örneğin kimlik doğrulama) için.

## Proje Yapısı
``````

├── client/                     # Ön uç (Frontend) dizini
│   ├── public/                 # Statik dosyalar
│   ├── src/                    
│   │   ├── components/         # Yeniden kullanılabilir React bileşenleri
│   │   │   └── Sidebar.jsx
│   │   ├── container/          # Durum yöneten ana bileşenler
│   │   │   └── PageContainer.jsx
│   │   ├── pages/              # Uygulama sayfaları (Chat, Login vb.)
│   │   │   ├── Chat.jsx
│   │   │   ├── ChatDetails.jsx
│   │   │   └── Login.jsx
│   │   ├── redux/              # Redux state yönetimi (slices, store)
│   │   │   ├── slices/
│   │   │   └── store.js
│   │   ├── services/           # Firebase gibi harici servisler
│   │   │   └── firebase.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── server/                     # Arka uç (Backend) dizini
│   ├── config/                 # Veritabanı yapılandırması
│   │   └── database.js
│   ├── controllers/            # İstek/yanıt mantığı
│   │   ├── messageController.js
│   │   └── roomController.js
│   ├── middlewares/            # Ara yazılım fonksiyonları
│   ├── models/                 # Veri şemaları
│   │   ├── MessageModel.js
│   │   └── RoomModel.js
│   ├── routes/                 # API uç noktaları
│   │   ├── messageRoute.js
│   │   └── roomRoute.js
│   ├── .env                    # Ortam değişkenleri
│   ├── index.js                # Sunucunun ana giriş noktası
│   ├── package.json
│   └── ...
│
└── README.md
``````
Hazırlayan
Nurullah Mencik - nurullahmencik42@gmail.com