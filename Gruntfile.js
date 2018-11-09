module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
     

        concat: {
            js: { //target
                src: [
                        './client/app/app.js',
                        './client/app/app.config.js',
                        './client/app/services/request.service.js',
                        './client/app/start/start.controller.js',
                        './client/app/nav/nav.controller.js',
                        './client/app/userprofile/userprofile.controller.js',
                    ],
                dest: './client/app-prod/app.js'
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: {
                    drop_console: true
                  }
            },
            js: { //target
                src: ['./client/app-prod/app.js'],
                dest: './client/app-prod/app.js'
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', [ 'concat', 'uglify']);


}