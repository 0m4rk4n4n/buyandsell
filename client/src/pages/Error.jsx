import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "center",
          marginTop: "50vh",
          fontWeight: "bold",
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </div>
    </>
  );
};
export default Error;
