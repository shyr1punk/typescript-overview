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

/**
 * Awesome child component
 *
 * Use with awesome parent component
 */
export default class Child extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { counter: 0 };
    }

    // readonly state: Readonly<State> = {
    //     counter: 0
    // }

    render() {
        // this.props.name = 'Name';
        // this.state.counter = 2;

        return (
            <div>
                <div>{this.props.name}</div>
                {
                    this.props.born && // <<=== number | undefined
                        <div>{(new Date()).getFullYear() - this.props.born}</div>
                        //                                 ^^^^^^^^^^^^^^^ number
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
