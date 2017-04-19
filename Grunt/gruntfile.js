module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['js/src/*.js'],
                // the location of the resulting JS file
                dest: 'js/dist/script.main.js'
            }
        },
        uglify: {
            dist: {
                src: ['js/dist/script.main.js'],
                dest: 'js/dist/script.main.min.js'
            }
        },

        concat_css: {
            options: {
                // Task-specific options go here.
            },
            all: {
                src: ['css/src/*.css'],
                dest: 'css/dist/style.main.css'
            }
        },

        cssmin: {
            options: {
                // mergeIntoShorthands: false,
                // roundingPrecision: -1
            },
            target: {
                files: {
                    'css/dist/style.main.min.css': ['css/dist/style.main.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);

};