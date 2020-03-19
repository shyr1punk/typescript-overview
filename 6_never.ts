/**
 * Never
 *
 * Обозначает невозможный тип
 * Вывод этого типа позволяет избежать некоторых ошибок
 */





/**
 * ветка условия не будет никогда достигнута
 */
function impossibleTypeGuard(value: any) {
    if (
        typeof value === "string" &&
        typeof value === "number"
    ) {
        value; // Never
    }
}





/**
 * не существует допустимого типа после проверки на string и number
 */
function controlFlowAnalysisWithNever(value: string | number) {
    if (typeof value === "string") {
        value; // Type string
    } else if (typeof value === "number") {
        value; // Type number
    } else {
        value; // Type never
    }
}