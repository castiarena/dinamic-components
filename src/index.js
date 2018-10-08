import React from 'react';
import ReactDOM from 'react-dom';
import ComponentDispatcher from "./ComponentDispatcher";

const componentsData = [
    {
        name: 'Foo',
        model: {
            title: 'Soy foo fuera de bazz'
        }
    }, {
        name: 'Bazz',
        model: {
            title: 'Soy bazz con foo adentro',
            components: [
                {
                    name: 'Extra',
                    model: {
                        title: 'Soy extra',
                        description: 'description extra',
                        components: [
                            {
                                name: 'Foo',
                                model: {
                                    title: 'Soy foo dentro de Bazz dentro de foo'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

class Wrapper extends React.Component {

    constructor(props){
        super(props);
        this.renderElement = this.renderElement.bind(this);
    }

    renderElement(componentData) {
        const { name, model } = componentData;
        const { components = [] } = model;
        const cd = new ComponentDispatcher();

        return React.createElement(
            cd.dispatch(name),
            model,
            ...components.map(this.renderElement)
        );
    }

    render(){
        return (<div>
            {componentsData.map(this.renderElement)}
        </div>)
    }
}


document.querySelector('body').appendChild(document.createElement('div'));

ReactDOM.render(<Wrapper/>, document.querySelector('body div'));