:root {
  --purple-900: #2b0a3a;
  --purple-700: #5b2a7a;
  --accent: #7b46d6;
  --white: #e1bcbc;
}

/* --- BASE STYLES --- */

html,
body {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Poppins', system-ui, Arial;
  min-height: 100vh;
  color: var(--white); 

  /* --- BACKGROUND GAMBAR STATIS (SATU FOTO) --- */
  background-image: url('nama_satu_fotomu.jpg'); /* Ganti dengan NAMA FILE FOTO LOKAL Anda */
  background-size: cover;          
  background-position: center center; 
  background-repeat: no-repeat;    
  background-attachment: fixed;    
}

/* --- HEADER & NAVIGATION --- */

header.navbar {
  background: transparent;
  position: relative; 
  z-index: 10; /* Lebih tinggi dari background dan efek */
}

.brand {
  font-weight: 700;
  letter-spacing: 0.6px;
  color: var(--accent); 
  text-shadow: 0 0 5px rgba(123, 70, 214, 0.5); 
}

/* --- MAIN CONTENT LAYOUT --- */

.container-main {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  position: relative;
  z-index: 2; /* Di atas bintang dan daun, di bawah loader/float-btn */
  
  background-color: rgba(0, 0, 0, 0.4); 
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08); 
}

.card {
  background: rgba(255, 255, 255, 0.04);
  border: none;
}

.muted {
  color: rgba(255, 255, 255, 0.65); 
}

/* --- BINTANG (STAR BACKGROUND) --- */

.stars {
  position: fixed;
  inset: 0;
  z-index: 0; /* Di atas gambar body, di bawah konten utama dan daun */
  pointer-events: none;
  overflow: hidden;
}

.star-twinkle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
  animation: twinkle 3s infinite ease-in-out;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(0.6);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

/* --- DAUN BERGUJURAN (FALLING LEAVES) --- */

.leaf {
  position: fixed;
  z-index: 1; /* Di atas bintang, di bawah konten utama */
  pointer-events: none;
  /* Properti ini diatur di JS, tapi penting untuk didefinisikan di sini juga */
  background: linear-gradient(45deg,#ffd1f7,#b389ff); /* Warna daun */
  border-radius: 4px; /* Bentuk daun */
  opacity: 0.9;
}

@keyframes fall {
  0% {
    transform: translateY(-10vh) rotate(0);
    opacity: 0.9;
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0; /* Daun memudar saat jatuh ke bawah */
  }
}

/* --- FLOATING GOLDEN BUTTON --- */

.float-btn {
  position: fixed;
  right: 18px;
  bottom: 18px;
  background: linear-gradient(45deg, #ffd54f, #ffb300);
  color: #853222;
  border-radius: 999px;
  padding: 12px 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  z-index: 1050; 
  border: none;
  cursor: pointer;
}

/* --- LOADING OVERLAY --- */

.loader-overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(180deg, rgba(20, 6, 30, 0.95), rgba(30, 10, 45, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000; 
}

.loader-stars {
  display: flex;
  gap: 8px;
}

.loader-stars .dot {
  width: 10px;
  height: 10px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(123, 70, 214, 0.9);
  animation: pop 1s infinite;
}

.loader-stars .dot:nth-child(2) {
  animation-delay: 0.5s;
}

.loader-stars .dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes pop {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.6);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
}

/* --- RESPONSIVE TWEAKS --- */

@media (max-width: 575px) {
  .container-main {
    margin: 1rem;
    padding: 0.5rem;
  }
}
