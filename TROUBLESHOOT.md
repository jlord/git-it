# Troubleshooting Git-it
_Common bumps in the road for users - helpful to know as a mentor!_


## Node.js

- Users should use `sudo` if Node commands are not working (also stated in [readme](https://github.com/jlord/git-it#install-git-it)).

## Operating Systems

- Windows users are suggested to download [GitHub for Windows](http:windows.github.com) as it installs Git along with it in an easier way than Git does by itself and things work more as expected. (stated in [readme](https://github.com/jlord/git-it#what-youll-need-to-run-this))

## Passwords / 2FA

- Without a credentials manager (which seemed like a little too much to require for this) users will need to **enter their username and password** when pushing/pulling to GitHub.
- If someone happens to already have a GitHub account _and_ happens to have enabled 2FA _and_ doesn't have a credential manager, they'll need to [create and use](https://help.github.com/articles/creating-an-access-token-for-command-line-use) a **access token** instead of a password.

## Git Directories

- Check a user **`git init` in an empty directory**.
- Check a user **hasn't `git init` inside of another Git repository**.

## Branch names and Filenames

- Check that the branch name **includes `add-`**
- Check that **user names are spelled correctly** and with matching **capitialization** to their GitHub.com account.
- Filenames should **include `add-`** and have the user's GitHub account name with matching **capitalization**.
- Files should be **added to the `/contributors` directory** and not the root in their `/patchwork` fork.


## Remotes

- Check that the `origin` remote connects to the **user's fork** and the `upstream` remote connects to **jlord/patchwork** and not vise vera or another way.

## Pull Requests

- If @reporobot says a pull request wasn't as expected, the user should do the following to correct their submission and re-trigger @reporobot to evaluate the pull request again:
  1. 'Close' the pull request on GitHub.com;
  2. Make the changes (They may even need to remove and then re-add @reporobot as a contributor to their fork to re-trigger his artwork edits);
  2. Push those changes to their branch on their fork;
  3. Re-open their pull request (from the same page the closed it on) which will trigger @reporobot again.

## System with Non-English Locale

1. Make sure you have an English locale available on your system, e.g. `en_US.UTF-8`. If it is not available yet, you need to install it.
2. Enforce the English locale to be used when calling *git-it*. In case of Unix-based systems, you can conveniently set up an `alias`.

**Setup for Debian-based systems**

Set up an alias for *git-it* to be used with this locale by adding the following line to `~/.bashrc`: `alias git-it="LANG=en_US.UTF-8 git-it"`.
You should be fine once the alias is set up. In case the locale is not available, you may run `dpkg-reconfigure locales` as root and add an English locale manually, e.g. `en_US.UTF-8`.
