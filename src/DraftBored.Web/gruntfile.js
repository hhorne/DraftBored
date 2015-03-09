/// <binding />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/

//annotated: {
//	options: {
//		banner: "(function () {\n",
//		footer: "\n})();",
//	},
//	src: "Build/**/*.annotated.js",
//	dest: "Build/App/App.js",
//},
//json: {
//	options: {
//		banner: "{\n",
//		footer: "\n}",
//		separator: ",\n",
//	},
//	src: "Data/**/*.json",
//	dest: "wwwroot/Data/Draft.json",
//}

module.exports = function (grunt) {
	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: "wwwroot/lib",
					layout: "byComponent",
					cleanTargetDir: false,
				}
			}
		},
		jshint: {
			all: {
				src: "App/**/*.js",
			}
		},
		concat: {
			javascript: {
				src: "App/**/*.js",
				dest: "Build/App/App.js",
			},
			json: {
				options: {
					banner: "{\n",
					footer: "\n}",
					separator: ",\n",
				},
				src: "Data/**/*.json",
				dest: "wwwroot/Data/Draft.json",
			}
		},
        ngAnnotate: {
        	options: {
        		singleQuotes: true,
        	},
        	all: {
        		files: {
                    "Build/App/App.js": ["Build/App/App.js"],
                },
        	}
        },		
        clean: {
        	all: {
        		src: ["Build/**/*", "wwwroot/"],
        	},
        	build: {
				src: ["Build/**/*"],
        	},
        },
        copy: {
        	all: {
        		files: [
					{ expand: true, flatten: true, src: ["Build/App/App.js"], dest: "wwwroot/App/", filter: "isFile" },
					{ expand: true, src: ["App/**/*.png"], dest: "wwwroot/", filter: "isFile" },
        			{ expand: true, src: ["App/**/*.html"], dest: "wwwroot/", filter: "isFile" },
        			{ expand: true, src: ["Web.Config"], dest: "wwwroot/", filter: "isFile" },
        		],
        	},
        },
        cleanempty: {
        	build: {
        		src: ["Build/**/*", "wwwroot/**/*"],
        	}
        },
        watch: {
        	all: {
        		files: ['App/**/*.js', 'App/**/*.html', "Data/**/*.json"],
        		tasks: ['jshint', "clean:build", "concat", "ngAnnotate", "copy"],
        	},
        	less: {
        		files: ["css/**/*.less", "App/**/*.less"],
				tasks: ["less"],
        	}
        },
        "json-minify": {
			files: "wwwroot/**/*.json",
        },
        jsonmin: {
        	all: {
        		options: {
        			stripWhitespace: true,
					stripComments: true,
        		},
        		files: {
					"wwwroot/Data/Draft.min.json": "wwwroot/Data/Draft.json",
        		},
        	},
        },
        less: {
        	all: {
        		options: {
        			paths: ["css/"],
        		},
        		files: {
        			"wwwroot/css/styles.css": ["css/**/*.less", "App/**/*.less"],
        		}
        	},
        },
    });

    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-ng-annotate");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-cleanempty");
    grunt.loadNpmTasks("grunt-jsonmin");
    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask("default",
		[
			"jshint",
			"clean:build",
			"concat",
			"ngAnnotate",
			"bower:install",
			"copy",
			"less",
			"jsonmin",
			"cleanempty"
		]
	);

    grunt.registerTask("concatData", ["concat:json", "jsonmin"]);
};