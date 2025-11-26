// escape HTML utility (dipertahankan untuk keamanan, meskipun tidak digunakan oleh bintang)
function escapeHtml(s) {
    return (s + '').replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
}

// initial loader: Sembunyikan loader setelah beberapa waktu
window.addEventListener('load', () => {
    // Sembunyikan loader saat halaman dimuat
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
    }, 800);
    
    // Inisialisasi Star Button (Golden)
    const goldenBtn = document.getElementById('golden');
    if (goldenBtn) {
        goldenBtn.addEventListener('click', () => {
            alert('✨ Semoga harimu penuh keberuntungan, fans XingQiu! ⭐🍂');
        });
    }
});


// --- BAGIAN UTAMA: TABURAN BINTANG ---

const starsEl = document.getElementById('stars');

if (starsEl) {
    // Membuat 40 bintang berkelap-kelip secara acak
    const starCount = 40; 
    for (let i = 0; i < starCount; i++) {
        const s = document.createElement('div');
        s.className = 'star-twinkle';
        
        // Posisi Acak
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        
        // Animasi Acak
        s.style.animationDuration = 2 + Math.random() * 4 + 's';
        s.style.opacity = 0.6 + Math.random() * 0.5;
        
        starsEl.appendChild(s);
    }
}
// --- AKHIR BAGIAN TABURAN BINTANG ---
