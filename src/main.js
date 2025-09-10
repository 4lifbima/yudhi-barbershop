import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

        const mobileMenuBtn = document.getElementById('mobile-menu');
        const mobileNav = document.getElementById('mobile-nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
                mobileNav.classList.add('hidden');
            });
        });

        // Form submission with loading and modal
        document.getElementById('booking-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const nama = document.getElementById('nama').value;
            const telepon = document.getElementById('telepon').value;
            const layanan = document.getElementById('layanan').value;
            const tanggal = document.getElementById('tanggal').value;
            
            // Show loading state
            const btnText = document.getElementById('btn-text');
            const btnLoading = document.getElementById('btn-loading');
            const bookingBtn = document.getElementById('booking-btn');
            
            btnText.classList.add('opacity-0');
            btnLoading.classList.remove('hidden');
            bookingBtn.disabled = true;
            bookingBtn.classList.add('cursor-not-allowed');
            
            // Simulate API call with timeout
            setTimeout(() => {
                // Hide loading state
                btnText.classList.remove('opacity-0');
                btnLoading.classList.add('hidden');
                bookingBtn.disabled = false;
                bookingBtn.classList.remove('cursor-not-allowed');
                
                // Populate modal with form data
                document.getElementById('modal-nama').textContent = nama;
                document.getElementById('modal-layanan').textContent = layanan;
                document.getElementById('modal-telepon').textContent = telepon;
                
                // Format date
                const dateObj = new Date(tanggal);
                const formattedDate = dateObj.toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                document.getElementById('modal-tanggal').textContent = formattedDate;
                
                // Show modal with animation
                const modal = document.getElementById('booking-modal');
                const modalContent = document.getElementById('modal-content');
                
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 50);
                
                // Reset form
                this.reset();
            }, 2000); // 2 second loading simulation
        });
        
        // Close modal functionality
        document.getElementById('close-modal').addEventListener('click', function() {
            const modal = document.getElementById('booking-modal');
            const modalContent = document.getElementById('modal-content');
            
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        });
        
        // Close modal when clicking backdrop
        document.getElementById('booking-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                document.getElementById('close-modal').click();
            }
        });

        // Service selection buttons
        document.querySelectorAll('.service-card button').forEach(button => {
            button.addEventListener('click', function() {
                const serviceName = this.closest('.service-card').querySelector('h3').textContent;
                alert(`Anda memilih layanan: ${serviceName}. Silakan isi form booking di bawah untuk melanjutkan.`);
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Hero buttons
        document.querySelectorAll('section#home button').forEach(button => {
            button.addEventListener('click', function() {
                if (this.textContent.includes('Booking')) {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                } else {
                    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // WhatsApp Widget functionality
        const waButton = document.getElementById('wa-button');
        const waPopup = document.getElementById('wa-popup');
        
        waButton.addEventListener('click', function() {
            waPopup.classList.toggle('hidden');
        });
        
        // Close popup when clicking outside
        document.addEventListener('click', function(e) {
            if (!document.getElementById('whatsapp-widget').contains(e.target)) {
                waPopup.classList.add('hidden');
            }
        });
        
        // Auto show popup after 5 seconds (first visit)
        setTimeout(() => {
            if (!localStorage.getItem('wa-popup-shown')) {
                waPopup.classList.remove('hidden');
                localStorage.setItem('wa-popup-shown', 'true');
                
                // Auto hide after 10 seconds
                setTimeout(() => {
                    waPopup.classList.add('hidden');
                }, 10000);
            }
        }, 5000);
