// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 淡入动画
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);

// 初始化淡入动画
window.onload = function() {
    fadeInOnScroll();
    initTeamMemberInteraction();
    initBackgroundAnimation();
};

// 团队成员交互功能
function initTeamMemberInteraction() {
    const toggleButtons = document.querySelectorAll('.toggle-details');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.previousElementSibling;
            const card = this.closest('.team-member-card');
            
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = '收起详情';
                // 添加动画效果
                details.style.opacity = '0';
                details.style.transform = 'translateY(20px)';
                details.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    details.style.opacity = '1';
                    details.style.transform = 'translateY(0)';
                }, 10);
            } else {
                details.style.opacity = '0';
                details.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    details.style.display = 'none';
                    this.textContent = '查看详情';
                }, 300);
            }
        });
    });
}

// 背景动画
function initBackgroundAnimation() {
    // 为页面添加动态背景效果
    const body = document.body;
    body.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradientBG 15s ease infinite';
    body.style.transition = 'background 0.5s ease';
}

// 添加背景渐变动画
const style = document.createElement('style');
style.textContent = `
    @keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    
    /* 卡片悬停效果增强 */
    .team-member-card:hover .team-member-img {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
    
    /* 平滑滚动到锚点 */
    html {
        scroll-behavior: smooth;
    }
    
    /* 页面加载动画 */
    .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    
    .page-loader.fade-out {
        opacity: 0;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// 数据可视化（如果需要）
function initCharts() {
    // 这里可以添加图表初始化代码
    // 例如使用Chart.js等库
}

// 导航栏active状态管理
function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    // 添加页面加载动画
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loading"></div>';
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1000);
});

// 响应式菜单处理
function handleResponsiveMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
}

// 调用响应式菜单处理函数
handleResponsiveMenu();

// 滚动到顶部按钮
function initScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'btn btn-primary fixed-bottom m-4 rounded-circle';
    scrollToTopBtn.style.display = 'none';
    scrollToTopBtn.style.width = '50px';
    scrollToTopBtn.style.height = '50px';
    scrollToTopBtn.style.fontSize = '24px';
    scrollToTopBtn.style.lineHeight = '1';
    scrollToTopBtn.style.zIndex = '1000';
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 调用滚动到顶部按钮初始化
initScrollToTop();

// 荔枝运输小游戏
function initLycheeGame() {
    const characterCards = document.querySelectorAll('.character-card');
    const gameIntro = document.getElementById('game-intro');
    const transportationSelection = document.getElementById('transportation-selection');
    const transportationOptions = document.getElementById('transportation-options');
    const transportationProcess = document.getElementById('transportation-process');
    const progressBar = document.querySelector('.progress-bar');
    const processMessage = document.getElementById('process-message');
    const transportationAnimation = document.getElementById('transportation-animation');
    const result = document.getElementById('result');
    const resultMessage = document.getElementById('result-message');
    const timeTaken = document.getElementById('time-taken');
    const score = document.getElementById('score');
    const playAgain = document.getElementById('play-again');
    
    let selectedCharacter = '';
    let selectedTransport = null;
    
    // 交通工具数据
    const transportationData = {
        ancient: [
            { name: '马车', speed: 40, time: '约15天', description: '古代主要的陆地交通工具，速度较慢', events: ['遇到暴雨，道路泥泞', '驿站补给', '遇到山贼，绕道而行', '顺利通过关卡'] },
            { name: '快马', speed: 80, time: '约7天', description: '古代最快的陆地交通工具，需要驿站换马', events: ['驿站换马', '日夜兼程', '体力透支，短暂休息', '顺利到达'] },
            { name: '水路+陆路', speed: 60, time: '约10天', description: '先通过水路到广州，再转陆路到西安', events: ['水路航行', '转陆路运输', '遇到风浪', '顺利到达'] }
        ],
        modern: [
            { name: '快递汽车', speed: 800, time: '约3天', description: '现代公路运输，速度较快', events: ['高速公路行驶', '服务区休息', '遇到交通堵塞', '顺利送达'] },
            { name: '高铁', speed: 1500, time: '约1天', description: '中国高铁网络发达，速度非常快', events: ['高铁快速行驶', '中转站换乘', '顺利到达'] },
            { name: '飞机', speed: 5000, time: '约6小时', description: '最快的运输方式，适合紧急运输', events: ['飞机起飞', '高空飞行', '顺利降落', '快速送达'] }
        ]
    };
    
    // 角色选择
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            selectedCharacter = this.getAttribute('data-character');
            gameIntro.style.display = 'none';
            transportationSelection.style.display = 'block';
            
            // 清空之前的选项
            transportationOptions.innerHTML = '';
            
            // 添加交通工具选项
            transportationData[selectedCharacter].forEach((transport, index) => {
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';
                
                const transportCard = document.createElement('div');
                transportCard.className = 'card transportation-card';
                transportCard.setAttribute('data-transport', index);
                
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body text-center';
                
                let imageSrc = '';
                if (selectedCharacter === 'ancient') {
                    if (transport.name === '马车') {
                        imageSrc = 'images/ancient/47751c1e21f3c823b51255d6f6afa54d.png';
                    } else if (transport.name === '快马') {
                        imageSrc = 'images/ancient/e901a1a8a3beaa9018c50635a6d5dbbe.png';
                    } else {
                        imageSrc = 'images/ancient/36a597fc9380ba9e18d68d391140f8c6.png';
                    }
                } else {
                    if (transport.name === '快递汽车') {
                        imageSrc = 'images/ancient/6e76225ebc137329ef9c1dbd9ad86446.png';
                    } else if (transport.name === '高铁') {
                        imageSrc = 'images/ancient/324b9367e053e1b1af6524957e530e7a.png';
                    } else {
                        imageSrc = 'images/ancient/ec03018086a280afae59ab007174add4.png';
                    }
                }
                
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = transport.name;
                img.className = 'img-fluid rounded-circle mb-3';
                img.style.width = '150px';
                img.onerror = function() {
                    this.style.display = 'none';
                    const text = document.createElement('div');
                    text.className = 'text-center p-4';
                    text.innerHTML = '<div class="rounded-circle bg-light p-4 d-inline-block"><i class="fas fa-horse" style="font-size: 3rem;"></i></div>';
                    this.parentElement.appendChild(text);
                };
                
                const h4 = document.createElement('h4');
                h4.textContent = transport.name;
                
                const p = document.createElement('p');
                p.textContent = transport.description;
                
                cardBody.appendChild(img);
                cardBody.appendChild(h4);
                cardBody.appendChild(p);
                transportCard.appendChild(cardBody);
                col.appendChild(transportCard);
                transportationOptions.appendChild(col);
            });
            
            // 交通工具选择
            const transportCards = document.querySelectorAll('.transportation-card');
            transportCards.forEach(card => {
                card.addEventListener('click', function() {
                    const transportIndex = parseInt(this.getAttribute('data-transport'));
                    selectedTransport = transportationData[selectedCharacter][transportIndex];
                    
                    transportationSelection.style.display = 'none';
                    transportationProcess.style.display = 'block';
                    
                    // 初始化进度条
                    progressBar.style.width = '0%';
                    progressBar.setAttribute('aria-valuenow', '0');
                    
                    // 开始运输过程
                    startTransportationProcess();
                });
            });
        });
    });
    
    // 运输过程
    function startTransportationProcess() {
        let progress = 0;
        const totalSteps = 5;
        const stepDuration = 1500;
        const events = selectedTransport.events;
        
        // 清空之前的动画
        transportationAnimation.innerHTML = '';
        
        // 创建运输动画元素
        const transportElement = document.createElement('div');
        transportElement.className = 'transport-animation-element';
        
        let transportImage = '';
        if (selectedCharacter === 'ancient') {
            if (selectedTransport.name === '马车') {
                transportImage = 'images/ancient/47751c1e21f3c823b51255d6f6afa54d.png';
            } else if (selectedTransport.name === '快马') {
                transportImage = 'images/ancient/e901a1a8a3beaa9018c50635a6d5dbbe.png';
            } else {
                transportImage = 'images/ancient/36a597fc9380ba9e18d68d391140f8c6.png';
            }
        } else {
            if (selectedTransport.name === '快递汽车') {
                transportImage = 'images/ancient/6e76225ebc137329ef9c1dbd9ad86446.png';
            } else if (selectedTransport.name === '高铁') {
                transportImage = 'images/ancient/324b9367e053e1b1af6524957e530e7a.png';
            } else {
                transportImage = 'images/ancient/ec03018086a280afae59ab007174add4.png';
            }
        }
        
        transportElement.innerHTML = `<img src="${transportImage}" alt="运输工具" class="img-fluid" style="max-height: 150px;">`;
        transportElement.style.left = '-100px';
        transportElement.style.bottom = '25px';
        transportationAnimation.appendChild(transportElement);
        
        // 运输过程步骤
        const steps = [
            { message: '开始从海南出发', progress: 20 },
            { message: events[0], progress: 40 },
            { message: events[1], progress: 60 },
            { message: events[2], progress: 80 },
            { message: events[3], progress: 100 }
        ];
        
        // 执行运输过程
        let currentStep = 0;
        const processInterval = setInterval(() => {
            if (currentStep < steps.length) {
                const step = steps[currentStep];
                processMessage.textContent = step.message;
                
                // 更新进度条
                progressBar.style.width = step.progress + '%';
                progressBar.setAttribute('aria-valuenow', step.progress);
                
                // 更新运输动画
                transportElement.style.left = (step.progress - 10) + '%';
                
                currentStep++;
            } else {
                clearInterval(processInterval);
                
                // 运输完成，显示结果
                setTimeout(() => {
                    transportationProcess.style.display = 'none';
                    showResult();
                }, 1000);
            }
        }, stepDuration);
    }
    
    // 显示结果
    function showResult() {
        result.style.display = 'block';
        
        let characterName = selectedCharacter === 'ancient' ? '古代信使' : '现代快递员';
        resultMessage.textContent = `作为${characterName}，你选择了${selectedTransport.name}来运送荔枝。`;
        timeTaken.textContent = `从海南到西安的距离约为2500公里，使用${selectedTransport.name}需要${selectedTransport.time}的时间。`;
        
        // 计算得分
        const baseScore = 1000;
        const timeFactor = selectedCharacter === 'ancient' ? 50 : 100;
        const speedScore = Math.round(baseScore * (selectedTransport.speed / 5000) * timeFactor);
        const totalScore = speedScore;
        
        score.textContent = `运输得分：${totalScore}分`;
    }
    
    // 再玩一次
    playAgain.addEventListener('click', function() {
        result.style.display = 'none';
        transportationProcess.style.display = 'none';
        gameIntro.style.display = 'block';
    });
}

// 初始化荔枝运输小游戏
if (document.getElementById('game-container')) {
    initLycheeGame();
}