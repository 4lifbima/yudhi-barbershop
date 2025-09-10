<template>
        <section id="contact" class="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div class="container mx-auto px-8 lg:px-12">
            <div class="text-center mb-20">
                <h2 class="text-4xl md:text-5xl text-white font-bold mb-6">Hubungi <span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Kami</span></h2>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">Siap melayani Anda dengan pelayanan terbaik dan profesional setiap hari</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-16">
                <div class="glass rounded-3xl p-10">
                    <h3 class="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Informasi Kontak</h3>
                    <div class="space-y-8">
                        <div class="flex items-start space-x-6 p-4 rounded-2xl bg-white/5">
                            <div class="text-3xl text-yellow-400">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-lg text-white mb-2">Alamat</div>
                                <div class="text-gray-300 leading-relaxed">Jl. Taman Abadi, Desa Sambiut<br>Kecamatan Totikum</div>
                            </div>
                        </div>
                        <div class="flex items-start space-x-6 p-4 rounded-2xl bg-white/5">
                            <div class="text-3xl text-green-400">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-lg text-white mb-2">WhatsApp</div>
                                <div class="text-gray-300">+62 812-3456-7890</div>
                            </div>
                        </div>
                        <div class="flex items-start space-x-6 p-4 rounded-2xl bg-white/5">
                            <div class="text-3xl text-blue-400">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-lg text-white mb-2">Jam Buka</div>
                                <div class="text-gray-300">Senin - Minggu: 09:00 - 21:00</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="glass rounded-3xl p-10 relative overflow-hidden">
                    <!-- Floating particles -->
                    <div class="particle" style="top: 10%; left: 20%; animation-delay: 0s;"></div>
                    <div class="particle" style="top: 60%; left: 80%; animation-delay: 2s;"></div>
                    <div class="particle" style="top: 30%; left: 70%; animation-delay: 4s;"></div>
                    
                    <h3 class="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent relative z-10">Booking Appointment</h3>
                    <form id="booking-form" class="space-y-6 relative z-10">
                        <div class="relative">
                            <input type="text" id="nama" placeholder="Nama Lengkap" required class="w-full p-5 rounded-2xl bg-white/10 border border-white/20 focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400 transition-all focus:bg-white/15 focus:scale-105">
                            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-100"></div>
                        </div>
                        <div class="relative">
                            <input type="tel" id="telepon" placeholder="Nomor Telepon" required class="w-full p-5 rounded-2xl bg-white/10 border border-white/20 focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400 transition-all focus:bg-white/15 focus:scale-105">
                            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-100"></div>
                        </div>
                        <div class="relative">
                            <select id="layanan" required class="w-full p-5 rounded-2xl bg-white/10 border border-white/20 focus:border-yellow-400 focus:outline-none text-white transition-all focus:bg-white/15 focus:scale-105">
                                <option value="" class="bg-gray-800">Pilih Layanan</option>
                                <option value="Haircut Premium" class="bg-gray-800">Haircut Premium - Rp 25.000</option>
                                <option value="Beard Styling" class="bg-gray-800">Beard Styling - Rp 15.000</option>
                                <option value="Hair Treatment" class="bg-gray-800">Hair Treatment - Rp 35.000</option>
                            </select>
                            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-100"></div>
                        </div>
                        <div class="relative">
                            <input type="date" id="tanggal" required class="w-full p-5 rounded-2xl bg-white/10 border border-white/20 focus:border-yellow-400 focus:outline-none text-white transition-all focus:bg-white/15 focus:scale-105">
                            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-100"></div>
                        </div>
                        <button type="submit" id="booking-btn" class="w-full modern-button py-5 rounded-2xl font-semibold text-gray-900 text-lg relative overflow-hidden">
                            <span id="btn-text">Booking Sekarang</span>
                            <div id="btn-loading" class="hidden absolute inset-0 flex items-center justify-center">
                                <div class="loading-spinner"></div>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
        <div id="booking-modal" class="hidden fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4">
        <div class="modal-content rounded-3xl p-8 max-w-md w-full mx-4 text-center transform transition-all duration-500 scale-95 opacity-0" id="modal-content">
            <div class="checkmark mx-auto mb-6"></div>
            <h3 class="text-2xl font-bold text-white mb-4">Booking Berhasil!</h3>
            <p class="text-gray-300 mb-2">Terima kasih <span id="modal-nama" class="text-yellow-400 font-semibold"></span></p>
            <p class="text-gray-300 mb-4">Booking Anda untuk <span id="modal-layanan" class="text-yellow-400 font-semibold"></span> telah diterima.</p>
            <div class="bg-white/10 rounded-2xl p-4 mb-6 text-left">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-400">Tanggal:</span>
                    <span id="modal-tanggal" class="text-white font-semibold"></span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-400">Telepon:</span>
                    <span id="modal-telepon" class="text-white font-semibold"></span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-gray-400">Status:</span>
                    <span class="text-green-400 font-semibold">Menunggu Konfirmasi</span>
                </div>
            </div>
            <p class="text-sm text-gray-400 mb-6">Kami akan menghubungi Anda segera untuk konfirmasi jadwal.</p>
            <div class="space-y-3">
                <a href="https://wa.me/6281234567890?text=Halo%20Yudhy%2C%20saya%20sudah%20booking%20appointment" 
                   target="_blank" 
                   class="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                    💬 Chat WhatsApp
                </a>
                <button id="close-modal" class="w-full glass border border-white/20 text-white py-3 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">
                    Tutup
                </button>
            </div>
        </div>
    </div>
</template>