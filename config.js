/*
 Build configurations specifying where various folders are located and build to.
 This is not intended to be modified by editors
 */
var dest = './dist',
    src = './src';

module.exports = {
    dest: dest,
    languageFile: './content/languages.yml',
    content: './content/**/*.md',
    images: {
        src: './images/**'
    },
    raw: {
        src: src + '/raw/**/*.*',
        dest: dest + '/raw'
    },
    customJavascript: {
        src: [src + '/js/myscript.js']
    },
    stylus: {
        src: src + '/stylus/**/*.styl',
        entries: [src + '/stylus/index.styl']
    }
};
