/**
 * Пример react-компонента на TypeScript
 *
 * Используются:
 *  - интерфейсы
 *  - обобщения
 *  - опциональные параметры
 * Работает инструментирование:
 *  - подсказки типов
 *  - JSDoc комментарии
 *  - безопасный рефакторинг
 */

import * as React from 'react';

interface State {
    /** Счётчик */
    counter: number;
}

interface Props {
    /** Имя */
    name: string;
    /** Год рождения */
    born?: number;
    /** Действие при изменении значения поля ввода */
    onInputChange(text: string): void;
}


class Child extends React.Component<Props, State> {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                {
                    this.props.born &&
                        <div>{(new Date()).getFullYear() - this.props.born}</div>
                }
                <button onClick={() => {
                    this.setState({
                        counter: this.state.counter + 1
                    });
                }}>+1</button>
                <input onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) => {
                        this.props.onInputChange(event.target.value)
                    }
                } />
                <div>{this.state.counter}</div>
            </div>
        );
    }
}


export default class Parent extends React.Component {
    render() {
        return (
            <Child
                name='Alex'
                born={29}
                onInputChange={(text) => { console.log(text); }}
            />
        );
    }
}