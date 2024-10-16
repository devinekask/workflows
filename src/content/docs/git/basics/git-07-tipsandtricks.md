---
title: Tips and Tricks
---

## Renaming files and folders

Git's behavior regarding file and folder names is influenced by the case sensitivity of the underlying file system. Some file systems, like macOS by default, are case-insensitive, while others like those in most Linux distributions are case-sensitive. To be sure git picks up filename changes, --especially when you are only changing the casing of a filename-- one should use the `git mv` command.

```bash
git mv MyFileName myfilename
```

## Don't create repositories inside iCloud/OneDrive or other cloud-synced folders

Since the .git directory contains a lot of files and folders, syncing takes forever and can cause issues. It's best to create repositories in a local folder.
