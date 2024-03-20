# Plugin Hunter for Pantheon-hosted WordPress sites

This command-line tool was created to help developers who maintain a large number of Pantheon-hosted WordPress 8+ sites to easily identify which sites have an active instance of a particular plugin or plugins. The primary use case is for enabling a quick response to critical security advisories.

## Dependencies
Requires command-line access to a properly configured instance of [Pantheon's Terminus CLI tool](https://github.com/pantheon-systems/terminus).

## Syntax
Use this script using the following
syntax:

`plugin-hunt plugin_name [plugin_name2]`

If you need to search for additional plugins, just keep appending their names as arguments. There is not limit.

## Sandbox sites supported
Plugin Hunter checks for the plugin on the live environment, except when a site is on a Sandbox plan. In that is the case, Plugin Hunter instead checks the dev environment.

## Stability: ALPHA Release
This script has thus far proven stable for our use cases, but has not been extensively tested.

## Installation
### With Composer
If you use `composer global` to install and maintain php tools and libraries, you may add Plugin Hunter to your command line via:

`composer global require devcollaborative/plugin-hunter`

**NOTE: As this library is currently pre-release, your global composer.json must include a [minimum-stability](https://getcomposer.org/doc/04-schema.md#minimum-stability) value of either "alpha" or "dev".**

### Without Composer
Download/clone this library and run the command from its directory as `./plugin-hunt`

## Todo
* Make this a terminus plug-in instead[?]
