# Tips and Tricks

## Renaming files and folders

Git's behavior regarding file and folder names is influenced by the case sensitivity of the underlying file system. Some file systems, like macOS by default, are case-insensitive, while others like those in most Linux distributions are case-sensitive. To be sure git picks up filename changes, --especially when you are only changing the casing of a filename-- one should use the `git mv` command.

```bash
git mv MyFileName myfilename
```
