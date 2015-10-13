## A Material Design Lite Ghost Theme

#### Install  
1. modify `/partials/disqus.hbs`   `disqus_shortname = ''` content for your disqus ID  
2. mv `Response/mdlutils.js` `Response/tags.js` to /core/server/helper .  
3. admin panel / code-injection / Blog Footer code , load `jQuery`
example：   
``
<!-- You can safely delete this line if your theme does not require jQuery -->
<script type="text/javascript" src="//lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js"></script>
``


[Live Demo](https://suki.im)  

[MDL Customize](http://www.getmdl.io/customize/index.html)  

#### For the Nerds  
For customization, basic knowledge of the command line and the following dependencies are required to use MDL:

- MDL ([http://www.getmdl.io/](http://www.getmdl.io/)) 
- Node ([http://nodejs.org/](http://nodejs.org/))
- Gulp ([http://gulpjs.com/](http://gulpjs.com/))
- Bower ([http://bower.io/](http://bower.io/)) 