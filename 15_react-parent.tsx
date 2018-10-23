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

import Child from './16_react-child';

export default class Parent extends React.Component {
    render() {
        return (
            <Child
                name='Alex'
                die={29}
                onInputChange={(text) => { console.log(text); }}
            />
        );
    }
}
