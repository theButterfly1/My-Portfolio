import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoShowcase from './components/VideoShowcase';

export default function App() {
  // null = main portfolio, string = video page (with optional videoId to auto-open)
  const [videoPage, setVideoPage] = useState(null);

  const goToVideos = (videoId) => {
    setVideoPage(videoId || 'open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setVideoPage(null);
    // Scroll back to the work section
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (videoPage !== null) {
    return (
      <>
        <Nav />
        <VideoShowcase
          initialVideoId={videoPage !== 'open' ? videoPage : null}
          onBack={goBack}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work onVideoClick={goToVideos} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
