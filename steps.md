Commit initial config
	unnecessary, just use yo angular and editorconfig/gitignore etc handled for you.

yo angular 
	no to all options other than angular-resource.
	still have to install angular-mocks
	grunt server works fine for preview
	we could be saying Ctrl + C kills the server properly

I now want to use Pure
	bower search pure
	bower install pure
	Still wish we could auto-wire this up.
	Wish we could just have access to Pure.css or pure.min.css
	Ahh. So you can get it. Just need to npm install and grunt build - could be clearer.

Create a service
	yo angular:service Github
	Created app/scripts/services/Github.js and test/spec/services/Github.js
	Was expecting it to be called GithubService but it was just Service


Create a directive
	yo angular:directive Github
   	create app/scripts/directives/Github.js
   	create test/spec/directives/Github.js
   	Again, expected the directive to include the name of the component
   	so GithubDirective


Suddenly ran into an issue with angular-resource breaking LiveReload. Had to
sudo bower install after a clean-up in order to get it playing nicely again.

Now nothing is loaded up after renaming directives and services (just within their modules). Something weird going on.

Looks like I wanted to create distinct components but the generator suggests doing everything under the same namespace.

Adding in code for directives and services.

Create views for each sub-page

$ yo angular:view search
   create app/views/search.html

$ yo angular:view repository
   create app/views/repository.html

$ yo angular:view about
   create app/views/about.html

and also

$ yo angular:view user
   create app/views/user.html


Adding templates for search
Adding an initial menu, but not linking anywhere for now
Adding a new directory 'gh' for github specific templates to the views directory

Populating app/views/gh with templates - these are borrowed from another github client application:

