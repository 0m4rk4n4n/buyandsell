import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserImg from "../resources/user.png";
import PhoneIcon from "@mui/icons-material/Phone";
import { useEffect, useRef, useState } from "react";
import Listing from "../components/Listing";
import { axiosInstance } from "../config/Config.js"
import { format } from "timeago.js";
import { useParams } from "react-router-dom";
const User = () => {
  const x = useRef();
  const path = useParams();
  const [ads,setAds]=useState([])
  const [adslength,setAdsLength]=useState(0)
  const [user,setUser]=useState({})
  const [loading,setLoading]=useState(false)

  useEffect(()=>
  {
    const fun=async()=>
    {
      setLoading(true)
    const res=await axiosInstance.get(`/auth/getalladsforauser/${path.id}`)
    setAds(res.data)
    setAdsLength(res.data.length)
    const res2 = await axiosInstance.get(`/auth/getuser/${path.id}`)
    setUser(res2.data)
    setLoading(false)
    }
    fun()
    window.scrollTo({ top: 0 });
  },[])
  const handleReveal = () => {
    x.current.innerHTML =`+1${user.phone}`;
  };
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#f8f9f9", minHeight: "100vh",textAlign:"center"}}>
        <div style={{ margin: 20, padding: 20 }}>
          <div>
            <img
              width={150}
              style={{
                borderRadius: "50%",
                display: "block",
                margin: "0 auto",
              }}
              src={UserImg}
            />
            <div
              style={{
                textAlign: "center",
                padding: 15,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
             {user.name}
            </div>
            {!loading &&             <div style={{ textAlign: "center", fontSize: "large",fontWeight:600,color:"#373373" }}>
              Member since {format(user.createdAt)}
            </div>}
            <div
              className="phoneNumber"
              style={{
                color: "#373373",
                padding: 10,
                marginTop: 20,
                textAlign: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ paddingTop: 5 }}>
                  <PhoneIcon />
                </div>
                <div ref={x}>XXXXXXXXXX</div>
              </div>
              <div
                style={{ cursor: "pointer", paddingTop: 1 }}
                onClick={handleReveal}
              >
                Reveal
              </div>
            </div>
            <div className="row">

              <div style={{ margin: "60px 0px" }} className="col-lg-12 centerDiv">
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#373373",
                    textAlign: "center",
                  }}
                >
                  User's Listings ({ads.length})
                </div>
                <div className="userElements"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexFlow:"wrap",
                    width:"100%",
                    gap: 15,            }}
                    >
                    {ads.map(ad=>
                      {

                        return <Listing key={ad._id} ad={ad}/>
                      })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default User;
