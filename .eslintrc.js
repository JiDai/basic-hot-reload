module.exports = {
    // Extend existing configuration
    // from ESlint and eslint-plugin-react defaults.
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    // In order to use Babel features
    // you need to enable this custom parser
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            ecmaVersion: 6
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        es6: true
    },
    "globals": {
        "Promise": true,
        "MA": true,
        "google": true,
        "DocumentTouch": true,
        "FS": true,
        "UserVoice": true
    },
    // Enable custom plugin known as eslint-plugin-react
    "plugins": [
        "babel",
        "react"
    ],
    "rules": {
        // Disable `no-console` rule
        "no-console": 2,
        "no-alert": 2,
        "no-debugger": 2,
        // Give a warning if identifiers contain underscores
        "no-underscore-dangle": 2,
        // Default to single quotes and raise an error if something
        // else is used
        "quotes": [
            2,
            "single"
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/prop-types": [
            1,
            {
                "ignore": [
                    "children",
                    "dispatch",
                    "params"
                ]
            }
        ],
        "semi": [
            2,
            "never"
        ],
        "max-len": [
            0,
            180,
            2
        ],
        "generator-star-spacing": 1,
    }
}
