# Upload your files

In this step you can finally upload your website to the server. Do this on a regular basis and do not wait until the last day before the deadline to upload the final version of your website. There can always be a problem (access rights to files, incorrect paths and filenames,...) that needs to be fixed. 
Folder structure
Once you are connected to the web server using FileZilla you will see a couple of folders (cgi-bin, data, logs, php, subsites, tmp, www). DO NOT delete or rename any of those folders. 

You only need to work in the folder www. Double click on this folder to open it. Everything that is put in the www folder is publicly accessible on your website through http://yourdomain.be. You notice that there is already an index.html in this folder.
If you navigate to http://yourdomain.be you notice that this index.html file is the default landing page provided by Combell. You can remove that file.

You have only access to one hosting package with one domain name. Because you want to upload multiple projects over time, you need to put them in their own folder. We will put this serie of exercises in a folder named demo. The exercises will be publicly accessible through http://yourdomain.be/demo/1basics, http://yourdomain.be/demo/2path,...

Right click on the www folder and select create directory. Enter demo as the name of the folder and click ok.


Uploading files and folders
You can upload files and folders by dragging them from Finder to the correct folder in FilleZilla. You can also drag files from the left pane in FileZilla. Both methods work in the same way.
Exercises
Move the 5 folders from the starting files to the demo folder on the web server.
1 - Basics
Navigate to http://yourdomain.be/demo/1basics. You see a message that access to this page is forbidden.
Navigate to http://yourdomain.be/demo/1basics/mainpage.html. You see the correct page.

This behavior is not desired. You do not want to navigate to for example google.com/searchpage/main.html because this is not user friendly. Adjust the name of the html file to index.html and try again.

Surfing to http://yourdomain.be/demo/1basics now shows the correct page. This is because index.html is the page that is always shown by default in any folder of the web server. Therefore you must always name your homepage index.html
2 - Path 
Navigate to http://yourdomain.be/demo/2path. You see the html page, although the styling is missing because the file style.css could not be loaded. Check the error message in the console.

Check the path that causes the error. The server searches for style.css in a folder css that should be in the root folder of the server. This is because of the use of absolute paths. If you check the file index.html you notice that the link to the css file starts with a slash. The slash always refers to the root folder and therefore causes an error.

Make sure that not a single path starts with a slash! Always work with relative paths. As a reminder:
./ → refers to the current folder
../ → one folder up

3 - Case
Navigate to http://yourdomain.be/demo/3case. You see an empty page without an image. You notice a 404 (file not found) error in the console.

If you compare this with the actual filename, you notice that the file has an uppercase W (bruceWillis.jpg instead of brucewillis.jpg).



the liveserver of VS Code is not case-sensitive, however your hosting is case-sensitive! This is the reason that we advise never to use uppercases in filenames.
4 - Space
Navigate to http://yourdomain.be/demo/4space and click on the link ‘extra page’. This works fine, however you notice the % characters in the address bar.


This is because the filename contains spaces. This is not a big issue, the browser encodes the space by %20 and shows the page. The same goes for names of folders. Ik works, although it is not very clean and it can result in potential errors when communicating with other servers or clients. Not all frameworks, platforms, servers,... automatically encodes the url.
5 - Forbidden
Go to the folder demo/5forbidden/assets/img and right click on the file bricewillis.jpg. Select ‘File Permissions’ from the menu. Change the code to 600 and click ok


Navigate to https://yourdomain.be/demo/5forbidden. You notice that the image is not shown. Check the error message in the console.


It shows a 403 (Forbidden) error. This means that the browser finds the file on the server but that the browser does not have enough permissions to get the image from the server. This can sometimes occur, especially when you store your files in a Dropbox, OneDrive, Google Drive,... folder on your local machine.  

You can read more about file permissions on linux machines in this article. The only thing you need to know for this course is that you can set permissions with 3 digits.
Files: need code 644 as permissions
Folders: need code 755 as permissions
Think about this when you receive a 403 error and everything works fine on your local machine.

Change the permissions for brucewillis.jpg again to 644 and the page should work fine.

