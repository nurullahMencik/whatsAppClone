import { useSelector } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageContainer from "./container/PageContiner";
import Login from "./pages/Login";
import Chat from "./pages/Chat"; // Chat bileşeni SideBar ve ChatDetails'i içerecek

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <PageContainer>
      {/* Kullanıcı varsa chat rotalarını göster, yoksa Login sayfasını */}
      {user ? (
        <Routes>
          {/* Ana chat rotası. Bu rota hem SideBar'ı hem de ChatDetails'i yönetir. */}
          <Route path="/" element={<Chat />} />
          {/* Belirli bir odaya gitmek için rota */}
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      ) : (
        // Kullanıcı yoksa sadece Login sayfasını göster
        <Login />
      )}
    </PageContainer>
  );
}

export default App;