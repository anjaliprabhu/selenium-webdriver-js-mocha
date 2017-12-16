### Environment Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/)
    * Or Install Node.js with [Homebrew](http://brew.sh/)

```
$ brew install node
```

    Download chrome or firefox driver and set the PATH

    Example: In mac
    export PATH=$PATH:~/Documents/Seleniumdrivers

2. Project Dependencies
	* Install Node modules

```
$ npm install
```

### For Running Tests

Execute the following command to run the tests

```
$ npm test
```

### For changing config
   In config folder you can configure the JSON file for test data
   Example: userRegistration.json has all test data for user registration
   
   
Following Test Cases Will be Executed

Open URL = https://www.personalcapital.com/
```
    ✓ open personal capital web page and check if title is loaded (3154ms)
    ✓ check if financial tool link is clickable (784ms)
    ✓ check if sign up button is clickable (1729ms)
    ✓ enter sign up details - correct values (388ms)
    ✓ enter sign up details - incorrect username & check error message (232ms)
    ✓ enter sign up details - incorrect password & check error message (219ms)
    ✓ enter sign up details - incorrect phoneNumber & check error message (232ms)
```
