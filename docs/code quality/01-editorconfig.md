# Editor config

How is your system setup? Are you using [tabs or spaces](https://www.youtube.com/watch?v=SsoOG6ZeyUI) for indenting? Are your files in a UTF-8 encoding? Do you end every file with a blank line or not?

These things can be negligible when you are working on your own, but can become a problem when you are working with others. To avoid these problems, you can use an `.editorconfig` file.

By using a specific file `.editorconfig` in the root of your project, your editor (or plugin) can automatically use the correct convention. This way, you can be sure that everyone is using the same settings.

In the end, it is up to you to decide which settings you want to use. You can find a list of all possible settings [here](http://editorconfig.org/#file-format-details). The following can be a great start:

```editorconfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## VS Code plugin

Although some editors have support for editorconfig build in, for VS Code, you need to install the [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) plugin.
