# Upload your files

In this step you can finally upload your website to the server. Do this on a regular basis and do not wait until the last day before the deadline to upload the final version of your website. There can always be a problem (access rights to files, incorrect paths and filenames, ...) that needs to be fixed.

## Folder structure

Once you are connected to the web server using FileZilla you will see a couple of folders (cgi-bin, data, logs, PHP, subsites, tmp, www). **DO NOT delete or rename any of those folders**.

You only need to work in the folder `www`. Doubleclick on this folder to open it. Everything that is put in the `www` folder is publicly accessible on your website through <http://www.yourdomain.be>. You notice that there is already an `index.html` in this folder.

If you navigate to <http://www.yourdomain.be> you notice that this `index.html` file is the default landing page provided by Combell. You can remove that file and add your own homepage if you want.

![FileZilla Files](/img/ftp/index.png)

You have only access to one hosting package with one domain name. Because you want to upload **multiple projects** over time, you need to put them in their own folder.

To create a new folder, right-click on the `www` folder and select `create directory`. Enter a name of the folder and click `ok`.

## Uploading files and folders

You can upload files and folders by dragging them from Finder to the correct folder in FilleZilla. You can also drag files from the left pane in FileZilla. Both methods work in the same way.
