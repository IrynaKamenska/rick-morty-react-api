import React from 'react';
import './App.css';
import CharacterGallery from './CharacterGallery';
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
    return (
        <>
            <Header></Header>
            <CharacterGallery></CharacterGallery>
            <Footer></Footer>
        </>
    );
}

