import Image from "next/image";
import TikTokVideoPlayer from "./components/TikTokVideoPlayer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Logo */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/logo.png"
            alt="Tokogaspol88 Logo"
            width={200}
            height={200}
            priority
            className="drop-shadow-2xl rounded-lg"
          />
        </div>

        {/* Welcome Messages */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Selamat Datang di Toko Gaspol 88
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-300 font-medium">
            Distributor Resmi Aditif Tukang Solar & Spesialis Printilan Otomotif Murah
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mt-6 leading-relaxed">
            Dari aditif solar andalan sampai printilan mobil & motor—semua ada di sini.<br/>
            <span className="text-yellow-400 font-semibold">Gaspol 88</span> hadir untuk kamu yang ingin performa kendaraan tetap gaspol, tanpa ribet, tanpa mahal!
          </p>
        </div>

        {/* Aditif Solar Section */}
        <div className="w-full max-w-6xl mb-12">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-8 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                🌟 Aditif Tukang Solar – Hemat & Nendang!
              </h3>
              <p className="text-gray-300 text-lg">
                Sebagai distributor resmi Aditif Tukang Solar, kami menyediakan produk asli dan bergaransi.<br/>
                Dipercaya ribuan pengguna truk dan mobil diesel di seluruh Indonesia:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-white font-semibold">Tenaga Lebih Responsif</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-white font-semibold">Lebih Irit Bahan Bakar</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-white font-semibold">Mengurangi Asap & Mesin Kasar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-white font-semibold">Cocok untuk Mobil Euro 4 hingga Mesin Tua</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <span className="text-2xl">🚚</span>
                <span className="text-blue-400 font-bold text-lg">Testimoni Pengguna</span>
              </div>
              <p className="text-gray-300 italic">
                "Truk jalan terus? Pakai Tukang Solar. Sekali pakai langsung terasa bedanya."
              </p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-full max-w-6xl mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Produk Unggulan Kami</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="mb-4">
                <Image
                  src="/produk1.png"
                  alt="Paket 4 Botol Aditif Tukang Solar Distributor"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Paket 5 Botol Aditif Tukang Solar Distributor Resmi Jakarta
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Paket lengkap aditif solar berkualitas tinggi untuk performa mesin diesel yang optimal.
              </p>
              <a
                href="https://vt.tokopedia.com/t/ZSkb5VNaV/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Beli Sekarang Rp 99.999</span>
              </a>
            </div>

            {/* Product 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="mb-4">
                <Image
                  src="/produk2.png"
                  alt="Aditif Tukang Solar Bikin mobil Diesel Enteng dan Bertenaga Distributor Resmi Jakarta"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                Aditif Tukang Solar Bikin Mobil Diesel Enteng dan Bertenaga Distributor Resmi Jakarta
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Aditif premium untuk mesin diesel yang membuat kendaraan lebih enteng dan bertenaga.
              </p>
              <a
                href="https://vt.tokopedia.com/t/ZSkb5qAnm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Beli Sekarang Rp 19.999</span>
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Gaspol 88 Section */}
        <div className="w-full max-w-6xl mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold text-center mb-8 text-orange-400">
              🔧 Kenapa Belanja di Gaspol 88?
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-orange-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-orange-400 mb-2">Distributor Resmi</h4>
                <p className="text-gray-300 text-sm">Produk Terpercaya & Bergaransi</p>
              </div>
              
              <div className="text-center p-6 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-orange-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-green-400 mb-2">Harga Rakyat</h4>
                <p className="text-gray-300 text-sm">Barang Lengkap & Terjangkau</p>
              </div>
              
              <div className="text-center p-6 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-orange-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">Full Support</h4>
                <p className="text-gray-300 text-sm">Bengkel & Pengguna Akhir</p>
              </div>
              
              <div className="text-center p-6 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-orange-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-purple-400 mb-2">Grosir & Eceran</h4>
                <p className="text-gray-300 text-sm">Siap Kirim Cepat</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-6">
                <p className="text-yellow-400 font-bold text-lg mb-2">🏆 Kepercayaan Pelanggan adalah Prioritas Utama</p>
                <p className="text-gray-300">
                  Ribuan pelanggan telah merasakan perbedaan kualitas produk dan pelayanan kami. 
                  Bergabunglah dengan komunitas Gaspol 88 untuk pengalaman berbelanja yang memuaskan!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TikTok Video Section */}
        <div className="w-full max-w-4xl mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">Video Produk Kami</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <TikTokVideoPlayer 
                  videoId="7516524849704045880"
                  thumbnailSrc="/tiktok-thumbnail.svg"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">
                  Lihat Produk Kami di TikTok!
                </h3>
                <p className="text-gray-300 mb-6">
                  Tonton video demonstrasi produk aditif solar kami dan lihat bagaimana produk ini dapat meningkatkan performa kendaraan diesel Anda.
                </p>
                
                <div className="space-y-4">
                  {/* Play in Web Info */}
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span className="text-blue-400 font-semibold">Putar di Website</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Klik pada video di atas untuk memutar langsung di website
                    </p>
                  </div>
                  
                  {/* Open in TikTok Button */}
                  <a
                    href="https://www.tiktok.com/@toko_gaspol88/video/7516524849704045880?_r=1&u_code=ekl4h1me5950ie&region=SG&mid=7516524796537965317&preview_pb=0&sharer_language=id&_d=ej358jddgh6c6e&ec_shared_reflux_dynamic_params=%7B%22placeholder_material_id%22%3A%227516524849704045880%22%2C%22placeholder_origin_cover%22%3A%22https%253A%252F%252Fp16-sign-va.tiktokcdn.com%252Ftos-maliva-p-0068%252FociR3dIQ2Z4IwyBvBQfuiRAJBeIN4X6tBAUoDE~tplv-tiktokx-origin.webp%253Fdr%253D14572%2526refresh_token%253D61315ec6%2526x-expires%253D1781701200%2526x-signature%253DjvkpwnehYvAS0Ldd%25252Bs%25252FMQindKn0%25253D%2526t%253D4d5b0474%2526ps%253D13740610%2526shp%253D45126217%2526shcp%253Dd05b14bd%2526idc%253Dmy%2526s%253DPUBLISH%22%2C%22placeholder_product_id%22%3A%221731667887656567867%22%2C%22placeholder_video_id%22%3A%227516524849704045880%22%7D&ec_shared_reflux_scene=shop_tab_feed&share_item_id=7516524849704045880&source=h5_t&timestamp=1750167375&user_id=7515007041631650824&sec_user_id=MS4wLjABAAAAmVjUN38bQZP4TILMrxgO63QAKGH6ylqJP1r9BcdswNcZ-x7uXv769whjX81QZ_b6&social_share_type=0&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7509429385369323271&share_link_id=5819c216-f766-41dc-a9c3-9cd6ae977d6c&share_app_id=1180&ugbiz_name=MAIN&link_reflow_popup_iteration_sharer=%7B%22click_empty_to_play%22%3A1%2C%22dynamic_cover%22%3A1%2C%22follow_to_play_duration%22%3A-1.0%2C%22profile_clickable%22%3A1%7D&enable_checksum=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full justify-center lg:w-auto"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.43z"/>
                    </svg>
                    <span>Buka di Aplikasi TikTok</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </a>
                  
                  <div className="text-center lg:text-left">
                    <p className="text-gray-400 text-sm">
                      🎯 <strong>Dua cara menonton:</strong><br/>
                      • Klik video → Putar di website<br/>
                      • Klik tombol → Buka aplikasi TikTok
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/5 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-orange-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 bg-green-500/5 rounded-full blur-xl"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Tokogaspol88"
                width={40}
                height={40}
                className="rounded"
              />
              <div className="text-left">
                <h3 className="font-bold text-yellow-400">Tokogaspol88</h3>
                <p className="text-sm text-gray-400">Kebutuhan Otomotif Terpercaya</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Tokogaspol88. Semua hak dilindungi. Toko kebutuhan otomotif terpercaya.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
