## A Material Design Lite Ghost Theme

#### Install  
1. modify `/partials/disqus.hbs`   `disqus_shortname = ''` content for your disqus ID  
2. mv `Response/mdlutils.js` `Response/tags.js` to `/core/server/helpers` .  
3. In the admin panel / code-injection / Blog Footer code , Don't repeat loading `jQuery`
example:

```html
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
```

4. change your footer link `/partials/footer.hbs`

[Live Demo](https://suki.im)  

[MDL Customize](http://www.getmdl.io/customize/index.html)  

#### Pic
![enteFixr image description here](https://suki.im/content/images/2015/10/20151013141427.png)

#### Fix
2015-10-18：  
        Content Image (.entry-content img) : width:100%;height:auto; (图片不再飘出去了)  
        Fix Googleapis CDN (css.net)  
        Fix Disqus comment

#### 中文说明
1. 修改  `/partials/disqus.hbs` 文件的  `disqus_shortname = ''`  引号内,内容为 你的disqus ID.
2. 移动文件 `Response/mdlutils.js` `Response/tags.js`  到 `/core/server/helpers` 目录内.
3. 后台管理员面板->菜单code-injection -> Blog Footer 请勿重复加载`jQuery`  
example：  

```html
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
```

4. 改变默认的footer链接内容,文件在 `/partials/footer.hbs`
5. 移除 Disqus留言板 请打开`post.hbs`文件，移除 行`57`，与 行`50`到`52`(ID为comments的div移除) 即可
#### For the Nerds  
For customization, basic knowledge of the command line and the following dependencies are required to use MDL:

- MDL ([http://www.getmdl.io/](http://www.getmdl.io/))
- Node ([http://nodejs.org/](http://nodejs.org/))
- Gulp ([http://gulpjs.com/](http://gulpjs.com/))
- Bower ([http://bower.io/](http://bower.io/))
