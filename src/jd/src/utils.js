// 格式化时间

function formatTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    return `${year}年${month}月${day}日`
}

module.exports = {
    formatTime
}