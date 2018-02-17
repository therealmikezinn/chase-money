import typeChecker from 'js-type-checker';

const formatCents = (cents) => {
    if(typeChecker.isUndefined(cents)){
        return 0;
    }

    let copy = cents.slice(0);

    if(copy.length === 1){
        copy += '0';
    }

    if(copy.length > 2){
        copy = copy.slice(0, 2);
    }

    if(copy.length === 2
        && copy.charAt(0) === '0'
        && copy.charAt(1) !== '0'
    ){
        copy = copy.charAt(1);
    }

    return parseInt(copy, 10);
};

export const toCents = (amount) => {
    if(!typeChecker.isString(amount) && !typeChecker.isNumber(amount)){
        return 0;
    }

    const [dollar, cents] = amount.toString().split('.');

    const sign = (dollar.charAt(0) === '-') ? -1 : 1;

    dollar.replace('-', '');

    return sign * ((parseInt(dollar) * 100) + formatCents(cents));
};

export const toDollar = (cents) => {
    if(!typeChecker.isString(cents)
        && !typeChecker.isNumber(cents)
        || cents === 0
        || cents.toString().length < 3
    ){
        return 0;
    }

    const amount = cents.toString();

    const sign = (amount.charAt(0) === '-') ? -1 : 1;

    amount.replace('-', '');

    return sign * parseFloat(`${amount.slice(0, amount.length - 2)}.${amount.slice(amount.length - 2)}`)
};
