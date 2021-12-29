export function createHome(element) {
    element.textContent = '';
    createHero(element);
    createSchedule(element);
}

function createHero(element) {
    const hero = document.createElement('div');
    hero.id = 'home';
    element.append(hero);

    const container = document.createElement('div');
    container.id = 'menuHeroContainer';

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Pizza Bar';
    container.append(title);

    const paragraph = document.createElement('p');
    paragraph.classList.add('description');
    paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    container.append(paragraph);

    hero.append(container);
}

function createSchedule(element) {
    const schedule = document.createElement('div');
    schedule.id = 'schedule';
    element.append(schedule);

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Opening Hours';
    schedule.append(title);

    schedule.append(createScheduleTable());
}

function createScheduleTable() {
    const table = document.createElement('table');
    table.id = 'schedule-table';

    table.innerHTML = `
    <table>
        <tr><th>Monday - </th><td>12pm - 7pm</td></tr>
        <tr><th>Tuesday - </th><td>12pm - 7pm</td></tr>
        <tr><th>Wednesday - </th><td>12pm - 7pm</td></tr>
        <tr><th>Thursday - </th><td>12pm - 7pm</td></tr>
        <tr><th>Friday - </th><td>12pm - 7pm</td></tr>
        <tr><th>Saturday - </th><td>12pm - 7pm</td></tr>
        <tr><th>Sunday - </th><td>CLOSED</td></tr>
    </table>
    `;

    return table;
}