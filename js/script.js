class EbookReader {
    constructor() {
        this.currentBook = null;
        this.currentChapterIndex = 0;
        this.settings = {
            fontSize: 'medium',
            theme: 'light',
            lineHeight: 'normal'
        };
        
        this.books = [
            {
                id: 1,
                title: '凡人修仙传',
                author: '忘语',
                chapters: [
                    {
                        id: 1,
                        title: '第一章 七玄门',
                        content: `青山镇是镜州最南部的一个小镇，镇子不大，只有几百户人家。镇子三面环山，只有一条小路通向外界。

                        清晨，薄雾还未完全散去，镇上的居民已经开始了一天的忙碌。在镇子东头的一座小院里，一个约莫十二三岁的少年正在院子里练习拳法。

                        这少年名叫韩立，是镇上韩铁匠的儿子。他身形瘦小，但眼神却异常明亮，一招一式都打得有模有样。

                        "立儿，该吃饭了。"屋里传来母亲温柔的声音。

                        韩立收住拳势，擦了擦额头的汗水，快步走进屋里。桌上已经摆好了简单的早饭：一碗稀粥，两个窝头，还有一小碟咸菜。

                        "爹呢？"韩立问道。

                        "一早就去铁匠铺了，说今天要赶制一批农具。"母亲一边盛粥一边说。

                        韩立默默地吃着早饭，心里却在想着昨天在镇上听到的消息：七玄门要来招收弟子了。`
                    },
                    {
                        id: 2,
                        title: '第二章 测试',
                        content: `七玄门的招收仪式在镇中心的广场举行。整个青山镇都沸腾了，几乎所有适龄的少年都来到了这里，希望能被选中。

                        韩立也站在人群中，心情既紧张又期待。他看到广场中央搭起了一个高台，台上站着几个身穿青色道袍的人，想必就是七玄门的仙师了。

                        测试开始了。第一个环节是检测灵根。少年们排着队，一个个走到一个水晶球前，将手放在上面。

                        "无灵根，下一个！"

                        "五行杂灵根，资质太差，下一个！"

                        "无灵根，下一个！"

                        听着一个个失望的结果，韩立的心渐渐沉了下去。

                        终于轮到他了。他深吸一口气，将手放在冰凉的水晶球上。突然，水晶球发出了微弱的五色光芒。

                        "咦？五行灵根俱全，虽然资质普通，但总算是有灵根。"负责测试的中年道士点了点头，"你叫什么名字？"

                        "韩立。"韩立恭敬地回答。

                        "好，你通过了第一轮测试，到那边等候吧。"`
                    },
                    {
                        id: 3,
                        title: '第三章 入门',
                        content: `通过测试的少年只有五人，韩立是其中之一。他们被带到镇上的客栈暂住，等待七玄门的飞舟来接。

                        三天后，一艘巨大的飞舟出现在青山镇上空。飞舟通体青色，上面刻满了玄奥的符文，散发着淡淡的灵光。

                        "这就是仙家法宝吗？"韩立仰望着飞舟，心中充满了震撼。

                        飞舟缓缓降落，从上面走下来一位白发老者和几个年轻弟子。

                        "恭喜你们通过测试，从今天起，你们就是我七玄门的记名弟子了。"白发老者声音洪亮，"老夫姓李，是外门执事，负责带你们回宗门。"

                        少年们依次登上飞舟。韩立找了个靠窗的位置坐下，看着窗外的景色快速后退，青山镇越来越小，最终消失在视野中。

                        "修仙之路，就从今天开始了。"韩立握紧了拳头，眼中闪过一丝坚定。`
                    },
                    {
                        id: 4,
                        title: '第四章 七玄门',
                        content: `飞舟飞行了整整一天，终于在一座巍峨的山门前停了下来。

                        山门上龙飞凤舞地写着三个大字：七玄门。门后是连绵的宫殿楼阁，云雾缭绕，仙鹤飞舞，宛如仙境。

                        "好浓郁的灵气！"韩立深吸一口气，感觉浑身舒畅。

                        李执事带着他们来到一处偏殿，那里已经聚集了数百名新入门的弟子。

                        "七玄门分为外门和内门。你们现在是记名弟子，需要在三年内达到炼气期三层，才能成为外门弟子。"李执事严肃地说，"如果三年后还达不到要求，就只能离开宗门了。"

                        接下来是分配住处和发放物品。韩立分到了一间简陋的木屋，还有一本基础功法《长春功》和一瓶聚气丹。

                        晚上，韩立盘膝坐在床上，翻看着《长春功》。功法并不复杂，主要是引导灵气在体内循环，打通经脉。

                        "这就是修仙吗？"韩立按照功法描述，开始尝试感应天地灵气。`
                    },
                    {
                        id: 5,
                        title: '第五章 初窥门径',
                        content: `一个月过去了，韩立终于感应到了第一缕灵气。

                        那是一种很奇妙的感觉，仿佛有无数细小的光点在身边飞舞。他按照功法指引，尝试将这些光点引入体内。

                        起初很不顺利，光点总是从他身边溜走。但韩立没有放弃，一遍又一遍地尝试。

                        终于在第三天晚上，他成功地将一缕灵气引入了丹田。虽然只有头发丝那么细，但却让他兴奋不已。

                        "成功了！"韩立睁开眼睛，脸上露出了笑容。

                        从那天起，韩立的修炼速度明显加快。他发现自己对灵气的感应越来越敏锐，吸收灵气的速度也越来越快。

                        三个月后，韩立成功突破到了炼气期一层。当他将这个好消息告诉李执事时，李执事也露出了惊讶的表情。

                        "三个月就突破到炼气期一层，你的资质虽然普通，但悟性倒是不错。"李执事难得地夸奖了一句。

                        韩立心中暗喜，更加努力地修炼起来。他知道，这只是开始，修仙之路还很长。`
                    }
                ]
            }
        ];
        
        this.initializeElements();
        this.bindEvents();
        this.loadSettings();
        this.loadDemoBook();
    }

    initializeElements() {
        this.elements = {
            // 侧边栏控制
            menuToggle: document.getElementById('menuToggle'),
            closeSidebar: document.getElementById('closeSidebar'),
            sidebar: document.getElementById('sidebar'),
            
            // 设置面板
            settingsBtn: document.getElementById('settingsBtn'),
            closeSettings: document.getElementById('closeSettings'),
            settingsPanel: document.getElementById('settingsPanel'),
            overlay: document.getElementById('overlay'),
            
            // 阅读内容
            bookContent: document.getElementById('bookContent'),
            bookTitle: document.getElementById('bookTitle'),
            bookAuthor: document.getElementById('bookAuthor'),
            chapterList: document.getElementById('chapterList'),
            currentChapter: document.getElementById('currentChapter'),
            
            // 章节导航
            prevChapter: document.getElementById('prevChapter'),
            nextChapter: document.getElementById('nextChapter'),
            
            // 文件上传
            fileUpload: document.getElementById('fileUpload'),
            
            // 设置控件
            fontSmall: document.getElementById('fontSmall'),
            fontMedium: document.getElementById('fontMedium'),
            fontLarge: document.getElementById('fontLarge'),
            themeButtons: document.querySelectorAll('.theme-btn'),
            spacingButtons: document.querySelectorAll('.spacing-btn')
        };
    }

    bindEvents() {
        // 侧边栏控制
        this.elements.menuToggle.addEventListener('click', () => this.toggleSidebar());
        this.elements.closeSidebar.addEventListener('click', () => this.toggleSidebar());

        // 设置面板控制
        this.elements.settingsBtn.addEventListener('click', () => this.toggleSettings());
        this.elements.closeSettings.addEventListener('click', () => this.toggleSettings());
        this.elements.overlay.addEventListener('click', () => this.closeAllPanels());

        // 章节导航
        this.elements.prevChapter.addEventListener('click', () => this.previousChapter());
        this.elements.nextChapter.addEventListener('click', () => this.nextChapter());

        // 文件上传
        this.elements.fileUpload.addEventListener('change', (e) => this.handleFileUpload(e));

        // 字体设置
        this.elements.fontSmall.addEventListener('click', () => this.setFontSize('small'));
        this.elements.fontMedium.addEventListener('click', () => this.setFontSize('medium'));
        this.elements.fontLarge.addEventListener('click', () => this.setFontSize('large'));

        // 主题设置
        this.elements.themeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.setTheme(btn.dataset.theme));
        });

        // 行间距设置
        this.elements.spacingButtons.forEach(btn => {
            btn.addEventListener('click', () => this.setLineHeight(btn.dataset.spacing));
        });

        // 键盘快捷键
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    toggleSidebar() {
        this.elements.sidebar.classList.toggle('open');
        this.elements.overlay.classList.toggle('show');
    }

    toggleSettings() {
        this.elements.settingsPanel.classList.toggle('open');
        this.elements.overlay.classList.toggle('show');
    }

    closeAllPanels() {
        this.elements.sidebar.classList.remove('open');
        this.elements.settingsPanel.classList.remove('open');
        this.elements.overlay.classList.remove('show');
    }

    loadDemoBook() {
        this.currentBook = this.books[0];
        this.renderBookInfo();
        this.renderChapterList();
        this.loadReadingProgress();
    }

    renderBookInfo() {
        this.elements.bookTitle.textContent = this.currentBook.title;
        this.elements.bookAuthor.textContent = `作者：${this.currentBook.author}`;
    }

    renderChapterList() {
        const chapterList = this.elements.chapterList;
        chapterList.innerHTML = this.currentBook.chapters.map((chapter, index) => `
            <div class="chapter-item" data-chapter-index="${index}">
                <div class="chapter-title">${chapter.title}</div>
                <div class="chapter-preview">${chapter.content.substring(0, 30)}...</div>
            </div>
        `).join('');

        // 绑定章节点击事件
        chapterList.querySelectorAll('.chapter-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                this.goToChapter(index);
                this.closeAllPanels();
            });
        });
    }

    goToChapter(chapterIndex) {
        this.currentChapterIndex = chapterIndex;
        this.renderChapter();
        this.updateChapterNavigation();
        this.saveReadingProgress();
        
        // 更新活跃章节样式
        this.elements.chapterList.querySelectorAll('.chapter-item').forEach((item, index) => {
            item.classList.toggle('active', index === chapterIndex);
        });

        // 滚动到章节开头
        this.scrollToChapterStart();
    }

    renderChapter() {
        const chapter = this.currentBook.chapters[this.currentChapterIndex];
        
        const content = `
            <div class="chapter-content">
                <div class="chapter-header">
                    <h2>${chapter.title}</h2>
                </div>
                <div class="chapter-body">
                    ${chapter.content.split('\n\n').map(paragraph => 
                        `<p class="content-paragraph">${paragraph}</p>`
                    ).join('')}
                </div>
            </div>
        `;
        
        this.elements.bookContent.innerHTML = content;
        this.elements.currentChapter.textContent = chapter.title;
        
        this.applySettings();
    }

    previousChapter() {
        if (this.currentChapterIndex > 0) {
            this.goToChapter(this.currentChapterIndex - 1);
        }
    }

    nextChapter() {
        if (this.currentChapterIndex < this.currentBook.chapters.length - 1) {
            this.goToChapter(this.currentChapterIndex + 1);
        }
    }

    scrollToChapterStart() {
        // 滚动到阅读区域的顶部
        this.elements.bookContent.scrollTop = 0;
    }

    updateChapterNavigation() {
        this.elements.prevChapter.disabled = this.currentChapterIndex === 0;
        this.elements.nextChapter.disabled = this.currentChapterIndex === this.currentBook.chapters.length - 1;
    }

    setFontSize(size) {
        this.settings.fontSize = size;
        
        // 更新按钮状态
        [this.elements.fontSmall, this.elements.fontMedium, this.elements.fontLarge].forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (size === 'small') this.elements.fontSmall.classList.add('active');
        if (size === 'medium') this.elements.fontMedium.classList.add('active');
        if (size === 'large') this.elements.fontLarge.classList.add('active');
        
        this.applySettings();
        this.saveSettings();
    }

    setTheme(theme) {
        this.settings.theme = theme;
        
        // 更新按钮状态
        this.elements.themeButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelector(`[data-theme="${theme}"]`).classList.add('active');
        
        this.applySettings();
        this.saveSettings();
    }

    setLineHeight(spacing) {
        this.settings.lineHeight = spacing;
        
        // 更新按钮状态
        this.elements.spacingButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelector(`[data-spacing="${spacing}"]`).classList.add('active');
        
        this.applySettings();
        this.saveSettings();
    }

    applySettings() {
        const bookContent = this.elements.bookContent;
        
        // 应用字体大小
        const fontSizeMap = {
            small: '16px',
            medium: '18px',
            large: '20px'
        };
        bookContent.style.fontSize = fontSizeMap[this.settings.fontSize];
        
        // 应用主题
        document.body.className = `app ${this.settings.theme}-theme`;
        
        // 应用行间距
        const lineHeightMap = {
            tight: '1.6',
            normal: '1.8',
            loose: '2.0'
        };
        bookContent.style.lineHeight = lineHeightMap[this.settings.lineHeight];
    }

    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file || !file.name.endsWith('.txt')) {
            alert('请选择TXT格式的文件');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            const chapters = this.parseTxtToChapters(content, file.name.replace('.txt', ''));
            
            const newBook = {
                id: Date.now(),
                title: file.name.replace('.txt', ''),
                author: '未知作者',
                chapters: chapters
            };
            
            this.currentBook = newBook;
            this.currentChapterIndex = 0;
            this.renderBookInfo();
            this.renderChapterList();
            this.goToChapter(0);
            this.closeAllPanels();
            
            // 重置文件输入
            event.target.value = '';
        };
        
        reader.readAsText(file);
    }

    parseTxtToChapters(content, bookTitle) {
        // 简单的章节解析逻辑
        const lines = content.split('\n');
        const chapters = [];
        let currentChapter = null;
        
        for (const line of lines) {
            const trimmedLine = line.trim();
            
            // 检测章节标题（简单的启发式规则）
            if (trimmedLine.match(/^第[零一二三四五六七八九十百千]+章/) || 
                trimmedLine.match(/^Chapter \d+/i) ||
                trimmedLine.match(/^\d+\./)) {
                
                // 保存前一章
                if (currentChapter) {
                    chapters.push(currentChapter);
                }
                
                // 开始新章节
                currentChapter = {
                    id: chapters.length + 1,
                    title: trimmedLine,
                    content: ''
                };
            } else if (currentChapter) {
                // 添加到当前章节内容
                if (currentChapter.content) {
                    currentChapter.content += '\n\n';
                }
                currentChapter.content += trimmedLine;
            }
        }
        
        // 添加最后一章
        if (currentChapter) {
            chapters.push(currentChapter);
        }
        
        // 如果没有检测到章节，将整个内容作为一章
        if (chapters.length === 0) {
            chapters.push({
                id: 1,
                title: bookTitle,
                content: content
            });
        }
        
        return chapters;
    }

    handleKeyboard(event) {
        // 只在阅读模式下响应键盘事件
        if (this.elements.bookContent.querySelector('.chapter-content')) {
            switch(event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    this.previousChapter();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    this.nextChapter();
                    break;
                case 'Escape':
                    this.closeAllPanels();
                    break;
            }
        }
    }

    saveSettings() {
        localStorage.setItem('ireader-settings', JSON.stringify(this.settings));
    }

    loadSettings() {
        const saved = localStorage.getItem('ireader-settings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
            this.applySettings();
            
            // 更新UI状态
            this.setFontSize(this.settings.fontSize);
            this.setTheme(this.settings.theme);
            this.setLineHeight(this.settings.lineHeight);
        }
    }

    saveReadingProgress() {
        if (this.currentBook) {
            const progress = {
                bookId: this.currentBook.id,
                chapterIndex: this.currentChapterIndex
            };
            localStorage.setItem('ireader-progress', JSON.stringify(progress));
        }
    }

    loadReadingProgress() {
        const saved = localStorage.getItem('ireader-progress');
        if (saved) {
            const progress = JSON.parse(saved);
            if (progress.bookId === this.currentBook.id) {
                this.goToChapter(progress.chapterIndex);
                return;
            }
        }
        
        // 默认显示第一章
        this.goToChapter(0);
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new EbookReader();
});