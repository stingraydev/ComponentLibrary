class Biblio {

    constructor(element) {
        this.element = element;
    }

    // Методы проверки на тип

    isNull() {
        return !this.element && typeof this.element === 'object';
    }

    isUndefined() {
        return typeof this.element === 'undefined';
    }

    isBoolean() {
        return this.element instanceof Boolean || typeof this.element === 'boolean';
    }

    isNumber() {
        return (this.element instanceof Number || typeof this.element === 'number') && !Number.isNaN(this.element);
    }

    isNaN() {
        return typeof this.element === 'number' && Number.isNaN(this.element);
    }

    isString() {
        return this.element instanceof String || typeof this.element === 'string';
    }

    isSymbol() {
        return this.element instanceof Symbol || typeof this.element === 'symbol';
    }

    isArray() {
        return Array.isArray(this.element);
    }

    isObject() {
        return typeof this.element === 'object';
    }

    // Методы преобразования типов

    strToNum() {
        return this.isString() ? +this.element : new Error('Вы ввели не строку');
    }

    strToArr() {
        return this.isString() ? this.element.split('') : new Error('Вы ввели не строку');
    }

    numToStr() {
        return this.isNumber() ? String(this.element) : new Error('Вы ввели не число');
    }

    numToArr() {
        return this.isNumber() ? String(this.element).split('').map((elem) => parseInt(elem, 10)) : new Error('Вы ввели не число');
    }

    BooleanToStr() {
        return this.isBoolean() ? String(this.element) : new Error('Вы ввели не логическое значение');
    }

    BooleanToArr() {
        return this.isBoolean() ? String(this.element).split('') : new Error('Вы ввели не логическое значение');
    }

    ArrToNum() {
        if (Array.isArray(this.element)) {
            let newNumber = '';
            this.element.forEach((elem) => {
                if (typeof elem === 'number') {
                    newNumber += String(elem);
                }
            });
            return newNumber.length === this.element.length ? parseInt(newNumber, 10) : new Error('В массиве есть нечисловые значения');
        }
        return new Error('Вы ввели не массив');
    }

    ArrToStr() {
        return Array.isArray(this.element) ? this.element.join('') : new Error('Вы ввели не массив');
    }

    ArrToObj() {
        return this.isArray() ? Object.assign(...this.element) : new Error('Вы ввели не массив');
    }

    ObjToStrJson() {
        return this.isObject() ? JSON.stringify(this.element) : new Error('Вы ввели не объект');
    }

    ObjToArr() {
        return this.isObject() ? Object.entries(this.element) : new Error('Вы ввели не объект');
    }

    JsonToObj() {
        return typeof this.element === 'string' ? JSON.parse(this.element) : new Error('Вы ввели не JSON');
    }
}

module.exports = Biblio;