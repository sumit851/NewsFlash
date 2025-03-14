import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
}
