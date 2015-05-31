module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			'webgui/build/libs.js': 'webgui/js/libs/*.js',
			'webgui/build/libs.css': 'webgui/css/libs/*.css',
			'files/app.css' :'webgui/css/app.css',
			'files/app.js' :'webgui/js/app.js',
			'files/index.tpl' :'webgui/tpl/index.tpl',
			'files/signal.svg' :'webgui/src/signal.svg',
		},
		compress: {
			main: {
				options: {
					mode: 'gzip',
				},
				files : [
					{ src: ['webgui/build/libs.js'], dest: 'files/libs.js.gz' },
					{ src: ['webgui/build/libs.css'], dest: 'files/libs.css.gz' },
				]
			}
		}
	});

  // Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compress');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'compress']);

};
