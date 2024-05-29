document.querySelector('#activity-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.querySelector('#activity-password').value;
    const correctPassword = '960818361'; // 设置你的密码

    if (password !== correctPassword) {
        alert('密码错误，请重试。');
        return;
    }

    const name = document.querySelector('#activity-name').value;
    const date = document.querySelector('#activity-date').value;
    const description = document.querySelector('#activity-description').value;

    const activity = document.createElement('div');
    activity.className = 'activity';
    activity.innerHTML = `
        <h3>${name}</h3>
        <p>时间：${new Date(date).toLocaleString()}</p>
        <p>描述：${description}</p>
        <button class="delete-button">删除</button>
    `;

    document.querySelector('#schedule').appendChild(activity);

    this.reset();
});

document.querySelector('#schedule').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        const password = prompt('请输入管理员密码：');
        const correctPassword = '960818361'; // 设置管理员密码

        if (password !== correctPassword) {
            alert('密码错误，无法删除活动。');
            return;
        }

        const activity = event.target.closest('.activity');
        activity.remove();
    }
});
