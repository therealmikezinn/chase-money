# chase-money

A small library for converting between cents and dollars
without the hassle of floating point arithmetic

## Usage

```javascript
const { toCents, toDollars } = require('chase-money');

// Converting To cents
const cents = toCents(123.32);

// Converting to dollars
const dollars = toDollars(cents);
```

## API

### `toCents(amount)`

Converts a dollar ammount to cents

-  `amount` - The dollar amount to be converted to cents,
can be either a string or numeric type. When amount is not valid
toCents will return 0.


### `toDollars(cents)`

Converts a dollar ammount to cents

-  `cents` - The number of cents to be converted to dollars,
can be either a string or numeric type.  When amount is not valid
toDollars will return 0.

