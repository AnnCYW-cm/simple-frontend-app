document.addEventListener('DOMContentLoaded', () => {
    const timeContainer = document.getElementById('current-time');
    const updateTime = (timezone = 'UTC') => {
        const now = dayjs().tz(timezone);
        timeContainer.innerText = now.format('HH:mm:ss A');
    };

    updateTime();

    // 每秒更新一次时间
    setInterval(() => updateTime(), 1000);
});


document.addEventListener('DOMContentLoaded', () => {
    const timeContainer = document.getElementById('current-time');
    const timezoneSelect = document.getElementById('timezone-select');
    let selectedTimezone = 'UTC';

    // 初始化 Micromodal
    MicroModal.init();

    const updateTime = () => {
        const now = dayjs().tz(selectedTimezone);
        timeContainer.innerText = now.format('HH:mm:ss A');
    };

    updateTime();
    setInterval(updateTime, 1000);

    // 处理时区选择
    document.getElementById('save-timezone').addEventListener('click', () => {
        selectedTimezone = timezoneSelect.value;
        updateTime();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 加载 Day.js 插件
    dayjs.extend(dayjs_plugin_utc);
    dayjs.extend(dayjs_plugin_timezone);

    const timeContainer = document.getElementById('current-time');
    const timezoneSelect = document.getElementById('timezone-select');
    let selectedTimezone = 'UTC';

    const updateTime = () => {
        const now = dayjs().tz(selectedTimezone);
        timeContainer.innerText = now.format('HH:mm:ss A');
    };

    updateTime();
    setInterval(updateTime, 1000);

    // 处理时区选择
    document.getElementById('save-timezone').addEventListener('click', () => {
        selectedTimezone = timezoneSelect.value;
        updateTime();
    });

    // 初始化 Micromodal
    MicroModal.init();
});