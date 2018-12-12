# Age-Calculator
`Age Calculator Using Javascript`

## Demo
Please [click](https://agecalc.now.sh/) here to see the Demo
## New Features
- support Floating label;
- simple user Validation;
- custom ErrorMessage;
- easily Find your Age;

## Example

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Age Calculator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="index.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.age').ageCalc()
        });
    </script>

</head>

<body>
    <div class="age">
        <input type="text">
        <label>Age</label>
        <span></span>
    </div>
   

</body>

</html>
```

## Usage

### Step:1 User to be added this following HtmlTag
```html
    <div class="age">
        <input type="text">
        <label>Age</label>
        <span></span>
    </div>
```

### Step:2 And added  this javascript
```javascript
 <script type="text/javascript">
        $(document).ready(function () {
            $('.age').ageCalc()
        });
    </script>
```
## Using NPM
####  To install using the `npm` package manager run

####  `npm install agecalc`

## License
MIT