<template>
        <nav class="fixed top-0 w-full z-50 glass-dark">
        <div class="container mx-auto px-6 lg:px-12 py-4">
            <div class="flex items-center justify-between">
                <div class="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent flex items-center space-x-2">
                    <i class="fas fa-cut text-gray-900 bg-yellow-500 p-2 rounded-xl"></i>
                    <span>Yudhy Barbershop</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="nav-link hover:text-yellow-400">Beranda</a>
                    <a href="#services" class="nav-link hover:text-yellow-400">Layanan</a>
                    <a href="#about" class="nav-link hover:text-yellow-400">Tentang</a>
                    <a href="#contact" class="nav-link hover:text-yellow-400">Kontak</a>
                </div>
                <button id="mobile-menu" class="md:hidden text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <!-- Mobile Menu -->
            <div id="mobile-nav" class="hidden md:hidden mt-4 space-y-4">
                <a href="#home" class="block hover:text-yellow-400">Beranda</a>
                <a href="#services" class="block hover:text-yellow-400">Layanan</a>
                <a href="#about" class="block hover:text-yellow-400">Tentang</a>
                <a href="#contact" class="block hover:text-yellow-400">Kontak</a>
            </div>
        </div>
    </nav>
</template>