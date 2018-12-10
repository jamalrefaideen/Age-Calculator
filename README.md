# Age-Calculator
执行命令：`Age Calculator Using Javascript`

## New Features
1.support Floating label;
2.simple user Validation;
3.custom ErrorMessage;
4.easily Find your Age;

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