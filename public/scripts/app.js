'use strict';

var app = {
    title: 'Title',
    subtitle: 'Great title',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log(app.options);
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var wipe = function wipe() {
    app.options = [];
    renderApp();
};

var appRoot = document.getElementById('app');

var number = [55, 101, 1000];

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "Here are your options." : "No Options"
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: wipe },
            'Remove all options'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (opt) {
                return React.createElement(
                    'li',
                    { key: opt },
                    opt
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
