let currentTask = 0

const tasks = [
    `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Магазин товаров для дома</title>
    <!-- Удалите строку ниже -->
    
  </head>
  <body>
    <header class="site-header">
      <div class="container">
        <h1>Gloevk</h1>
        <p class="description">Разнообразные товары для дома с доставкой по всей планете</p>
      </div>
    </header>

    <section class="features">
      <h2>Что поможет вам создать домашний уют?</h2>
      <p class="feature-furniture">Мебель и фурнитура</p>
      <p class="feature-lighting">Лампы и торшеры</p>
    </section>

    <section class="advantages">
      <h2>Что выделяет нас среди конкурентов?</h2>
      <ul class="advantages-list">
        <li>Ежедневные отчёты о ходе работ</li>
        <li>Используем только природные материалы</li>
        <li>Сами соберём мебель для вас</li>
        <li>Бесплатное гарантийное обслуживание в течение 10 лет</li>
      </ul>
    </section>

    <footer class="site-footer">
      <div class="container">
        
        <p>Магазин товаров для дома</p>
      </div>
    </footer>
  </body>
</html>`,
	`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Магазин товаров для дома</title>
    <!-- <link rel="stylesheet" href="style.css"> -->
  </head>
  <body>
    <header class="site-header">
      <div class="container">
        <h1>Gloevk</h1>
        <p>Разнообразные товары для дома с доставкой по всей планете</p>
      </div>
    </header>

    <section class="features">
      <h2>Что поможет вам создать домашний уют?</h2>
      <p>Мебель и фурнитура</p>
      <p>Лампы и торшеры</p>
    </section>

    <section class="advantages">
      <h2>Что выделяет нас среди конкурентов?</h2>
      <ul class="advantages-list">
        <li>Используем только природные материалы</li>
        <li>Ежедневные отчёты о ходе работ</li>
        <li>Сами соберём мебель для вас</li>
        <li>Бесплатное гарантийное обслуживание в течение 10 лет</li>
      </ul>
    </section>

    <footer class="site-footer">
      <div class="container">
        
        <p>Магазин товаров для дома</p>
      </div>
    </footer>
  </body>
</html>
`
];

const hideTheory = () => {
	document.querySelectorAll('[rel="theory"]').forEach(item => {
		item.classList.add("hidden");
	});
}

const showTheory = (taskId) => {
	document.querySelector(`#task${taskId}`).classList.remove("hidden")
}

const startPractice = (taskId) => {
	currentTask = taskId
	hideTheory();
	const code = tasks[taskId-1]
	const editor = document.querySelectorAll('#editor')[0]
	editor.value = code
	const example = document.querySelectorAll('#example')[0]
	example.innerHTML = ''
	example.append(_createHtmlObject(code))
	document.querySelectorAll('#practice')[0].classList.remove("hidden");
	document.querySelector('#nextPracticeButton').classList.add("hidden");
	document.querySelector('#checkPracticeButton').classList.remove("hidden");
	document.querySelector('#taskNumber').innerHTML = taskId;
}

const checkPractice = () => {
	const code = document.querySelectorAll(`#editor`)[0].value;
	const exampleObj = document.querySelectorAll(`#example`)[0];
	exampleObj.innerHTML = '';
	exampleObj.append(_createHtmlObject(code));
	alert('Задание успешно выполнено');
	document.querySelector('#checkPracticeButton').classList.add("hidden");
	document.querySelector('#nextPracticeButton').classList.remove("hidden");
}

const nextPractice = () => {
	showTheory(currentTask+1)
	document.querySelector('#practice').classList.add("hidden")
}

const _createHtmlObject = (code) => {
	const htmlObject = document.createElement('div');
	htmlObject.innerHTML = code;
	return htmlObject;
}

