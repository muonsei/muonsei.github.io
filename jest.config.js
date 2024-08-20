module.exports = {
    /*  transform: `tells Jest that all js or jsx files need to be transformed
        using a jest-preprocess.js file in the project root`
    */
    transform: {
        "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
    },
    /*  moduleNameMapper: tells Jest how to handle imports.
        You are mainly concerned here with mocking static file imports,
        which Jest can’t handle.
        For stylesheets you need to use the package identity-obj-proxy. 
        For all other assets, you need to use a manual mock called file-mock.js. 
        You need to create this yourself. The convention is to create a 
        directory called __mocks__ in the root directory for this.
     */
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/file-mock.js",
    },
    // testPathIgnorePatters: basically locations for Jest to ignore
    testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
    /*  transformIgnorePatterns: Gatsby includes un-transpiled ES6 code.
        By default, Jest does not try to transform code inside `node_modules`,
        which causes an error (because `gatsby-browser-entry.js` isn’t being 
        transpiled before running in Jest).
        Fix: change the default transformIgnorePatterns to exclude the 
        gatsby module
     */
    transformIgnorePatterns: [
        "node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)",
    ],
    /*  globals: sets __PATH_PREFIX__, which is usually set by Gatsby, and which 
        some components need
    */
    globals: {
        __PATH_PREFIX__: "",
    },
    testEnvironmentOptions: {
        url: "http://localhost",
    },
    setupFiles: ["<rootDir>/loadershim.js", "<rootDir>/test-setup.js"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
};
