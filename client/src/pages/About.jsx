import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage=()=>
{
useEffect(()=>{window.scrollTo({ top: 0 });},[])
    return (
        <>
        <Navbar/>
        <div className='about' style={{padding:30}}>
        <h1 style={{textAlign:"center",margin:10,color:"#373373"}}>About Us!</h1>
        <div style={{padding:25}}>
        <h2 style={{textAlign:"center",color:"#373373",fontSize:25}}>Welcome to Buy and Sell – Your One-Stop Marketplace!</h2>
        <br/><br/>
        <h3>Your Hub for Everything You Need</h3>
        <p>Are you looking to buy or sell cars, real estate, find the perfect job, access essential services, or even find a loving pet to bring into your home? Look no further! Buy and Sell is your comprehensive online platform designed to meet all your buying and selling needs. With our easy-to-use and intuitive interface, you can navigate through a wide range of listings, connect with other users, and make transactions with confidence.</p>

        <br/>
        <h3>Connecting People, Connecting Communities</h3>
        <p>At Buy and Sell, we understand the importance of community. That's why we provide a platform where users can connect with each other, discuss listings, and build lasting relationships. Our user-friendly chat feature allows you to communicate directly with sellers or buyers, making the buying and selling process smoother than ever before.</p>
        <br/>
        <h3>Your Safety, Our Priority</h3>
        <p>We take your safety seriously. Buy and Sell employs advanced security measures to ensure a secure and trustworthy environment for all users. We verify user profiles and monitor listings to protect you from potential scams or fraudulent activities.</p>
        <br/>
        <h3>How It Works</h3>
        <div>
          <div>1. Create an Account: Sign up for your free Buy and Sell account to get started.</div>
          <div>2. Post Your Ads: Easily create and post your listings, providing detailed information and images to attract potential buyers or sellers.</div>
          <div>3. Connect and Communicate: Use our built-in chat feature to connect with other users, ask questions, and negotiate deals.</div>
        </div>
        <br/>
        <h3>Join the Buy and Sell Community Today!</h3>
        <p>Whether you're a seasoned online shopper or a first-time user, Buy and Sell offers a welcoming platform that caters to all your buying and selling needs. Discover the endless possibilities that await you and be part of our growing community.</p>
        <p>Get started now and experience the convenience, safety, and reliability of Buy and Sell. Your next great opportunity or cherished possession is just a click away!</p>
      </div>
        </div>
      <Footer/>
        </>
    )
}
export default AboutPage;
