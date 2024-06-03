var bgMusic = document.getElementById('bgMusic');
var button = document.createElement('button');
var currentTrackIndex = 0;

// 设置按钮图标
button.innerHTML = '<i class="fas fa-play-circle"></i>';
// 按钮点击事件处理函数
button.addEventListener('click', function() {
    // 如果音乐正在播放，则暂停音乐
    if (!bgMusic.paused) {
        bgMusic.pause();
        // 切换按钮图标为播放图标
        button.innerHTML = '<i class="fas fa-play-circle"></i>';
    } else {
        // 否则，播放音乐
        bgMusic.play();
        // 切换按钮图标为暂停图标
        button.innerHTML = '<i class="fas fa-pause-circle"></i>';
    }
});

bgMusic.addEventListener('ended', function() {
    // 先停止当前音乐
    bgMusic.pause();
    // Increment the current track index
    currentTrackIndex++;
    // If the current track index exceeds the number of sources, loop back to the first track
    if (currentTrackIndex >= bgMusic.children.length) {
        currentTrackIndex = 0;
    }
    // Set the source to the next track and play it
    bgMusic.src = bgMusic.children[currentTrackIndex].src;
    bgMusic.play();
});
// 添加按钮到页面中
document.body.appendChild(button);
button.style.position = 'absolute';
button.style.top = '640px';
button.style.left = '900px';
button.style.width = '50px';
button.style.height = '50px';
button.style.fontSize = '50px'; // 調整按鈕文本大小
button.style.padding = '15px 20px'; // 調整按鈕內邊距
button.style.backgroundColor = 'transparent'; // 調整按鈕背景顏色
button.style.color = '#fff'; // 調整按鈕文本顏色
button.style.border = 'none'; // 移除按鈕邊框
button.style.borderRadius = '50%'; // 圓形按鈕
button.style.cursor = 'pointer'; // 設置鼠標指針類型

// 添加鼠標懸停效果
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'transparent'; // 悬停時的背景顏色
    button.style.transform = 'scale(1.1)'; // 悬停時放大按鈕
});

// 添加鼠標離開效果
button.addEventListener('mouseleave', function() {
    button.style.backgroundColor = 'transparent'; // 返回原始背景顏色
    button.style.transform = 'scale(1)'; // 恢復原始大小
});