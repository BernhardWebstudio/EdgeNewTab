# New Tab Edge Extension

This extension has the purpose of enabling a possibility to 
replace the annoying msn homepage set as default page when 
opening a new tab. As it cannot be changed natively, this 
extension provides remedy.

Unfortunately, as of the [Microsoft Store Policies](https://docs.microsoft.com/en-us/legal/windows/agreements/store-policies#1012-edge-extensions), 
it is not allowed to publish this extension to the Store, as 
it "(...) alters browser functionality or settings including the start or 
home page, the new tab page (...)".

## Installation

You can still install this extension by side-loading it. 
If you want to be notified about new versions, star this 
repo and press the button "subscribe" to the right of the 
repo startpage.

### One-Time use

For now, the the easiest way is:
- to download/clone this repo
- enable "side-loading of extensions" in [about:flags](about:flags)
- go to settings (...) -> extensions -> add extension
- choose the folder which you just downloaded/cloned

The drawback is, that Windows deactivates the Extension on every load. 
There is a workaround: 

### The other way

For Windows to activate the extension each time and keep it installed, it has to be 
[packaged](https://docs.microsoft.com/en-us/microsoft-edge/extensions/guides/packaging/creating-and-testing-extension-packages#testing-an-appx-package) 
and the package 
[signed](https://docs.microsoft.com/en-us/microsoft-edge/extensions/guides/packaging/creating-and-testing-extension-packages#signing). 
You can do this manually or use the extension located in [package/edgeExtension.appx](package/edgeExtension.appx). 
As normally Windows Store handles signing and accepting of signatures, you will have to 
accept the signature by your own. Instructions can be found in 
[these instructions](https://docs.microsoft.com/en-us/windows/desktop/appxpkg/how-to-create-a-package-signing-certificate#remarks). 

TLDR: 
1. Download/clone the repo. 
2. Label the certificate as trusted:
2.1 Run Cmd.exe as administrator.
2.2 Run this command from the repo-directory: ´Certutil -addStore TrustedPeople .\certificates\MyKey.cer´
3. Install the app:
3.1. Run PowerShell as administrator
3.2. Run this command from the repo-directory: Add-AppxPackage .\package\edgeExtension.appx´

## Contributions

Want to provide a new default? Have an idea how to improve this extension?
Don't hesitate to open a PR.