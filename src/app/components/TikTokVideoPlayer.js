'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TikTokVideoPlayer({ videoId, thumbnailSrc }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Video Thumbnail - Click to play in web */}
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={openModal}
          className="block relative group cursor-pointer w-full"
        >
          <div className="relative bg-black rounded-lg overflow-hidden border-2 border-gray-700 group-hover:border-pink-500 transition-all duration-300 transform group-hover:scale-105 max-w-sm mx-auto">
            {/* Video Thumbnail */}
            <Image
              src={thumbnailSrc}
              alt="TikTok Video - Aditif Solar Tokogaspol88"
              width={320}
              height={480}
              className="w-full h-[480px] object-cover"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300">
              <div className="w-20 h-20 bg-pink-600/90 group-hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            {/* TikTok Logo Badge */}
            <div className="absolute top-4 right-4 bg-black/70 rounded-full p-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.43z"/>
              </svg>
            </div>
            
            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-semibold text-sm mb-1">Demonstrasi Aditif Solar</p>
              <p className="text-pink-400 text-xs">@toko_gaspol88</p>
            </div>
            
            {/* Click Hint */}
            <div className="absolute top-4 left-4 bg-pink-600/90 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Klik untuk memutar
            </div>
          </div>
        </button>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-md mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Container */}
            <div className="bg-black rounded-lg overflow-hidden relative">
              {/* Try TikTok embed first, fallback to custom player */}
              <div className="relative">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${videoId}?lang=id&autoplay=1`}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full"
                  title="TikTok Video Player"
                  onError={() => {
                    // If iframe fails, show fallback message
                    console.log('TikTok embed failed, showing fallback');
                  }}
                />
                
                {/* Fallback content overlay */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white p-6" style={{display: 'none'}} id="fallback-content">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.43z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Video Demonstrasi Produk</h3>
                    <p className="text-gray-300 mb-4">
                      Video menunjukkan cara penggunaan aditif solar Tokogaspol88 untuk meningkatkan performa kendaraan diesel.
                    </p>
                    <a
                      href={`https://www.tiktok.com/@toko_gaspol88/video/${videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.43z"/>
                      </svg>
                      <span>Tonton di TikTok</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="mt-4 text-center">
              <p className="text-white text-sm mb-3">
                🎬 Video produk aditif solar Tokogaspol88
              </p>
              <div className="flex justify-center space-x-3">
                <button
                  onClick={closeModal}
                  className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Tutup
                </button>
                <a
                  href={`https://www.tiktok.com/@toko_gaspol88/video/${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-lg transition-colors inline-flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.43z"/>
                  </svg>
                  <span>Buka TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
