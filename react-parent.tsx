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

import Child from './react-child';

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
