console.log('App.js is running!');

// create app object title/subtitle
//use title/subtitle in the template
//render template

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'This is my subtitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitted')
    //e.target.elements -> regular javascript, gives access to all elements inside form! 
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderForm();
    }
}

const onRemoveOptions = (e) => {
    e.preventDefault();
    app.options = [];
    renderForm();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length ? 'Your options': 'no options avaliable'}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveOptions}>Remove all</button>
            <ol>
                {app.options.map( option => <li key={option}>{option}</li> )}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderForm();