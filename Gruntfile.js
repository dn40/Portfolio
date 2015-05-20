module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        uglify: {
            my_target: {
                files: {
                    'script/script.min.js': ['script/script.js']
                }
            }
        },


        jshint: {
            all: ['Gruntfile.js']
        },


        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['style.css', 'style.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['css/main.scss'],
                    dest: 'css/main.css',
                    ext: '.css'
                }]
            }

        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/imgs',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'imgs'
                }]
            }
        }


    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Load the plugin that provides the "jshint" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // Load the plugin that provides the "cssmin" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Load the plugin that provides the "imagemin" task.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'jshint', 'cssmin', 'sass', 'imagemin']);
};
