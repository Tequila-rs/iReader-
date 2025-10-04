class EbookReader {
    constructor() {
        this.currentBook = null;
        this.currentPage = 0;
        this.pages = [];
        this.fontSize = 16;
        this.isDarkTheme = false;
        
        this.initializeElements();
        this.bindEvents();
        this.loadDemoBooks();
    }

    initializeElements() {
        this.elements = {
            menuToggle: document.getElementById('menuToggle'),
            closeSidebar: document.getElementById('closeSidebar'),
            sidebar: document.getElementById('sidebar'),
            themeToggle: document.getElementById('themeToggle'),
            fontDecrease: document.getElementById('fontDecrease'),
            fontIncrease: document.getElementById('fontIncrease'),
            bookContent: document.getElementById('bookContent'),
            prevPage: document.getElementById('prevPage'),
            nextPage: document.getElementById('nextPage'),
            pageInfo: document.getElementById('pageInfo'),
            readingProgress: document.getElementById('readingProgress'),
            fileUpload: document.getElementById('fileUpload'),
            floatingToolbar: document.getElementById('floatingToolbar'),
            highlightBtn: document.getElementById('highlightBtn'),
            bookmarkBtn: document.getElementById('bookmarkBtn')
        };
    }

    bindEvents() {
        // 侧边栏控制
        this.elements.menuToggle.addEventListener('click', () => this.toggleSidebar());
        this.elements.closeSidebar.addEventListener('click', () => this.toggleSidebar());

        // 主题和字体控制
        this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.elements.fontDecrease.addEventListener('click', () => this.adjustFontSize(-2));
        this.elements.fontIncrease.addEventListener('click', () => this.adjustFontSize(2));

        // 翻页控制
        this.elements.prevPage.addEventListener('click', () => this.previousPage());
        this.elements.nextPage.addEventListener('click', () => this.nextPage());

        // 文件上传
        this.elements.fileUpload.addEventListener('change', (e) => this.handleFileUpload(e));

        // 文本选择和高亮
        document.addEventListener('selectionchange', () => this.handleTextSelection());
        this.elements.highlightBtn.addEventListener('click', () => this.highlightSelection());
        this.elements.bookmarkBtn.addEventListener('click', () => this.addBookmark());

        // 键盘快捷键
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    toggleSidebar() {
        this.elements.sidebar.classList.toggle('open');
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        document.body.classList.toggle('dark-theme', this.isDarkTheme);
        this.elements.themeToggle.textContent = this.isDarkTheme ? '☀️' : '🌙';
    }

    adjustFontSize(change) {
        this.fontSize = Math.max(12, Math.min(24, this.fontSize + change));
        this.elements.bookContent.style.fontSize = `${this.fontSize}px`;
    }

    loadDemoBooks() {
        const demoBooks = {
            demo1: {
                title: '示例书籍1',
                content: this.generateDemoContent('这是示例书籍1的内容。\n\n'.repeat(50))
            },
            demo2: {
                title: '示例书籍2', 
                content: this.generateDemoContent('这是示例书籍2的不同内容。\n\n'.repeat(60))
            }
        };

        document.querySelectorAll('.book-item').forEach(item => {
            item.addEventListener('click', () => {
                const bookKey = item.dataset.book;
                this.loadBook(demoBooks[bookKey]);
                this.toggleSidebar();
            });
        });
    }

    generateDemoContent(baseText) {
        return baseText + '...更多示例内容...'.repeat(20);
    }

    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file || !file.name.endsWith('.txt')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const book = {
                title: file.name.replace('.txt', ''),
                content: e.target.result
            };
            this.loadBook(book);
            this.toggleSidebar();
        };
        reader.readAsText(file);
    }

    loadBook(book) {
        this.currentBook = book;
        this.pages = this.splitIntoPages(book.content, 1000); // 每页1000字符
        this.currentPage = 0;
        this.renderPage();
    }

    splitIntoPages(text, charsPerPage) {
        const pages = [];
        for (let i = 0; i < text.length; i += charsPerPage) {
            pages.push(text.substring(i, i + charsPerPage));
        }
        return pages;
    }

    renderPage() {
        if (this.pages.length === 0) {
            this.elements.bookContent.innerHTML = '<div class="welcome-message"><h2>无法加载书籍内容</h2></div>';
            return;
        }

        this.elements.bookContent.innerHTML = `
            <div class="page-content">
                <h3>${this.currentBook.title}</h3>
                <div class="content">${this.pages[this.currentPage]}</div>
            </div>
        `;

        this.updateNavigation();
    }

    previousPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.renderPage();
        }
    }

    nextPage() {
        if (this.currentPage < this.pages.length - 1) {
            this.currentPage++;
            this.renderPage();
        }
    }

    updateNavigation() {
        this.elements.pageInfo.textContent = `第 ${this.currentPage + 1} 页 / 共 ${this.pages.length} 页`;
        this.elements.readingProgress.value = ((this.currentPage + 1) / this.pages.length) * 100;
        
        this.elements.prevPage.disabled = this.currentPage === 0;
        this.elements.nextPage.disabled = this.currentPage === this.pages.length - 1;
    }

    handleTextSelection() {
        const selection = window.getSelection();
        if (selection.toString().trim().length > 0) {
            this.showFloatingToolbar(selection);
        } else {
            this.hideFloatingToolbar();
        }
    }

    showFloatingToolbar(selection) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        this.elements.floatingToolbar.style.display = 'flex';
        this.elements.floatingToolbar.style.top = `${rect.top - 50}px`;
        this.elements.floatingToolbar.style.left = `${rect.left + rect.width / 2}px`;
        this.elements.floatingToolbar.style.transform = 'translateX(-50%)';
    }

    hideFloatingToolbar() {
        this.elements.floatingToolbar.style.display = 'none';
    }

    highlightSelection() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.className = 'highlight';
            range.surroundContents(span);
            selection.removeAllRanges();
            this.hideFloatingToolbar();
        }
    }

    addBookmark() {
        const selection = window.getSelection();
        const text = selection.toString().trim();
        if (text) {
            alert(`已添加书签: "${text.substring(0, 30)}..."`);
            selection.removeAllRanges();
            this.hideFloatingToolbar();
        }
    }

    handleKeyboard(event) {
        if (event.key === 'ArrowLeft') {
            this.previousPage();
        } else if (event.key === 'ArrowRight') {
            this.nextPage();
        } else if (event.key === 'Escape') {
            this.hideFloatingToolbar();
        }
    }
}

// 初始化阅读器
document.addEventListener('DOMContentLoaded', () => {
    new EbookReader();
});