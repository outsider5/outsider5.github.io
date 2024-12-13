// 可在这里编写交互逻辑，如博客加载动画、导航高亮等

// 示例：平滑滚动效果
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});