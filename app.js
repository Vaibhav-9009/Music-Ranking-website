// Data from the application
const data = {
    top2024Songs: [
        {"rank": 1, "title": "BIRDS OF A FEATHER", "artist": "Billie Eilish", "streams": 2669087016, "platform": "Spotify"},
        {"rank": 2, "title": "Die With A Smile", "artist": "Lady Gaga & Bruno Mars", "streams": 2601434706, "platform": "Spotify"},
        {"rank": 3, "title": "Espresso", "artist": "Sabrina Carpenter", "streams": 2305304395, "platform": "Spotify"},
        {"rank": 4, "title": "Beautiful Things", "artist": "Benson Boone", "streams": 2205567165, "platform": "Spotify"},
        {"rank": 5, "title": "Who", "artist": "Jimin", "streams": 1755546087, "platform": "Spotify"},
        {"rank": 6, "title": "APT.", "artist": "ROSÉ & Bruno Mars", "streams": 1656252623, "platform": "Spotify"},
        {"rank": 7, "title": "Gata Only", "artist": "FloyyMenor & Cris Mj", "streams": 1652652863, "platform": "Spotify"},
        {"rank": 8, "title": "Good Luck, Babe!", "artist": "Chappell Roan", "streams": 1580782627, "platform": "Spotify"},
        {"rank": 9, "title": "Too Sweet", "artist": "Hozier", "streams": 1535252616, "platform": "Spotify"},
        {"rank": 10, "title": "Not Like Us", "artist": "Kendrick Lamar", "streams": 1527217484, "platform": "Spotify"}
    ],
    trending2025: [
        {"rank": 1, "title": "DtMF", "artist": "Bad Bunny", "streams": 834871854, "weeklyStreams": 34900000},
        {"rank": 2, "title": "BAILE INoLVIDABLE", "artist": "Bad Bunny", "streams": 645939871, "weeklyStreams": 28500000},
        {"rank": 3, "title": "Ordinary", "artist": "Alex Warren", "streams": 553004890, "weeklyStreams": 24100000},
        {"rank": 4, "title": "What I Want", "artist": "Morgan Wallen & Tate McRae", "streams": 450000000, "weeklyStreams": 31200000},
        {"rank": 5, "title": "Luther", "artist": "Kendrick Lamar & SZA", "streams": 973445700, "weeklyStreams": 25000000},
        {"rank": 6, "title": "undressed", "artist": "sombr", "streams": 200000000, "weeklyStreams": 15000000},
        {"rank": 7, "title": "Manchild", "artist": "Sabrina Carpenter", "streams": 180000000, "weeklyStreams": 12000000}
    ],
    platformStats: [
        {"name": "Spotify", "marketShare": 32.8, "subscribers": 239000000, "color": "#1DB954"},
        {"name": "Apple Music", "marketShare": 15.2, "subscribers": 88000000, "color": "#FA243C"},
        {"name": "YouTube Music", "marketShare": 8.0, "subscribers": 60000000, "color": "#FF0000"},
        {"name": "Amazon Music", "marketShare": 8.0, "subscribers": 55000000, "color": "#FF9900"},
        {"name": "Tidal", "marketShare": 2.5, "subscribers": 15000000, "color": "#000000"},
        {"name": "Others", "marketShare": 33.5, "subscribers": 100000000, "color": "#666666"}
    ],
    topArtists2025: [
        {"rank": 1, "name": "Bruno Mars", "monthlyListeners": 119074853, "trend": "stable"},
        {"rank": 2, "name": "The Weeknd", "monthlyListeners": 114025423, "trend": "up"},
        {"rank": 3, "name": "Lady Gaga", "monthlyListeners": 109569905, "trend": "down"},
        {"rank": 4, "name": "Billie Eilish", "monthlyListeners": 98146932, "trend": "stable"},
        {"rank": 5, "name": "Rihanna", "monthlyListeners": 93420134, "trend": "stable"},
        {"rank": 6, "name": "Ed Sheeran", "monthlyListeners": 92380315, "trend": "up"},
        {"rank": 7, "name": "Coldplay", "monthlyListeners": 91727394, "trend": "stable"},
        {"rank": 8, "name": "Kendrick Lamar", "monthlyListeners": 84762648, "trend": "up"},
        {"rank": 9, "name": "Bad Bunny", "monthlyListeners": 83421155, "trend": "stable"},
        {"rank": 10, "name": "Taylor Swift", "monthlyListeners": 82688261, "trend": "stable"}
    ],
    tiktokViral: [
        {"rank": 1, "title": "Anxiety", "artist": "Doechii", "videoCount": 2500000},
        {"rank": 2, "title": "Messy", "artist": "Lola Young", "videoCount": 2200000},
        {"rank": 3, "title": "APT.", "artist": "ROSÉ & Bruno Mars", "videoCount": 2000000},
        {"rank": 4, "title": "Not Like Us", "artist": "Kendrick Lamar", "videoCount": 1800000},
        {"rank": 5, "title": "Ordinary", "artist": "Alex Warren", "videoCount": 1500000},
        {"rank": 6, "title": "Taste", "artist": "Sabrina Carpenter", "videoCount": 1400000},
        {"rank": 7, "title": "That's So True", "artist": "Gracie Abrams", "videoCount": 1300000}
    ],
    industryStats: {
        "marketSize2025": 108730000000,
        "projectedSize2032": 193840000000,
        "growthRate": 8.6,
        "totalSubscriptions": 1800000000,
        "streamingRevenue": 22900000000
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupMobileMenu();
    populateRankings2024();
    populateTrending2025();
    populateArtistRankings();
    populateTikTokViral();
    setupPlatformChart();
    setupCounters();
    setupSearch();
    setupFilters();
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Populate 2024 Rankings
function populateRankings2024() {
    const grid = document.getElementById('rankings2024Grid');
    
    data.top2024Songs.forEach(song => {
        const songCard = createSongCard(song);
        grid.appendChild(songCard);
    });
}

// Populate 2025 Trending
function populateTrending2025() {
    const grid = document.getElementById('trending2025Grid');
    
    data.trending2025.forEach(song => {
        const songCard = createTrendingSongCard(song);
        grid.appendChild(songCard);
    });
}

// Populate Artist Rankings
function populateArtistRankings() {
    const grid = document.getElementById('artistsGrid');
    
    data.topArtists2025.forEach(artist => {
        const artistCard = createArtistCard(artist);
        grid.appendChild(artistCard);
    });
}

// Populate TikTok Viral
function populateTikTokViral() {
    const grid = document.getElementById('tiktokGrid');
    
    data.tiktokViral.forEach(song => {
        const tiktokCard = createTikTokCard(song);
        grid.appendChild(tiktokCard);
    });
}

// Create song card
function createSongCard(song) {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.innerHTML = `
        <div class="song-rank">#${song.rank}</div>
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
        <div class="song-streams">${formatStreams(song.streams)} streams</div>
    `;
    return card;
}

// Create trending song card
function createTrendingSongCard(song) {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.innerHTML = `
        <div class="song-rank">#${song.rank}</div>
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
        <div class="song-streams">${formatStreams(song.streams)} total streams</div>
        <div class="weekly-streams">${formatStreams(song.weeklyStreams)} weekly streams</div>
    `;
    return card;
}

// Create artist card
function createArtistCard(artist) {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.innerHTML = `
        <div class="artist-rank">#${artist.rank}</div>
        <div class="artist-name">${artist.name}</div>
        <div class="monthly-listeners">${formatStreams(artist.monthlyListeners)} monthly listeners</div>
        <div class="trend-indicator trend-${artist.trend}">${getTrendText(artist.trend)}</div>
    `;
    return card;
}

// Create TikTok card
function createTikTokCard(song) {
    const card = document.createElement('div');
    card.className = 'tiktok-card';
    card.innerHTML = `
        <div class="song-rank">#${song.rank}</div>
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
        <div class="video-count">${formatStreams(song.videoCount)} TikTok videos</div>
    `;
    return card;
}

// Format stream numbers
function formatStreams(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2) + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Get trend text
function getTrendText(trend) {
    switch(trend) {
        case 'up': return '↗ Rising';
        case 'down': return '↘ Falling';
        case 'stable': return '→ Stable';
        default: return '→ Stable';
    }
}

// Setup platform chart
function setupPlatformChart() {
    const ctx = document.getElementById('platformChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.platformStats.map(platform => platform.name),
            datasets: [{
                data: data.platformStats.map(platform => platform.marketShare),
                backgroundColor: data.platformStats.map(platform => platform.color),
                borderWidth: 2,
                borderColor: '#1a1a1a'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#ffffff',
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const platform = data.platformStats[context.dataIndex];
                            return `${platform.name}: ${platform.marketShare}% (${formatStreams(platform.subscribers)} subscribers)`;
                        }
                    }
                }
            }
        }
    });

    // Populate platform details
    populatePlatformDetails();
}

// Populate platform details
function populatePlatformDetails() {
    const container = document.getElementById('platformDetails');
    
    data.platformStats.forEach(platform => {
        const platformItem = document.createElement('div');
        platformItem.className = 'platform-item';
        platformItem.style.borderLeftColor = platform.color;
        
        platformItem.innerHTML = `
            <div class="platform-info">
                <h3>${platform.name}</h3>
                <p>${formatStreams(platform.subscribers)} subscribers</p>
            </div>
            <div class="platform-stats">
                <div class="platform-share">${platform.marketShare}%</div>
                <div class="platform-subs">Market Share</div>
            </div>
        `;
        
        container.appendChild(platformItem);
    });
}

// Setup animated counters
function setupCounters() {
    const counters = document.querySelectorAll('.counter, .stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Animate counter
function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };
    
    updateCounter();
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const allCards = document.querySelectorAll('.song-card, .artist-card, .tiktok-card');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        allCards.forEach(card => {
            const title = card.querySelector('.song-title, .artist-name')?.textContent.toLowerCase() || '';
            const artist = card.querySelector('.song-artist')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchTerm) || artist.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = searchTerm === '' ? 'block' : 'none';
            }
        });
    });
}

// Setup filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });
}

// Apply filter
function applyFilter(filter) {
    const sections = document.querySelectorAll('.rankings-section, .trending-section, .artists-section, .tiktok-section');
    
    sections.forEach(section => {
        switch(filter) {
            case 'all':
                section.style.display = 'block';
                break;
            case '2024':
                section.style.display = section.classList.contains('rankings-section') ? 'block' : 'none';
                break;
            case '2025':
                section.style.display = section.classList.contains('trending-section') ? 'block' : 'none';
                break;
            case 'artists':
                section.style.display = section.classList.contains('artists-section') ? 'block' : 'none';
                break;
            default:
                section.style.display = 'block';
        }
    });
}

// Scroll effects
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate cards on scroll
    const cards = document.querySelectorAll('.song-card, .artist-card, .tiktok-card, .stat-card');
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
});