---
title: 'Advent of Security 2022'
date: '2022-12-06'
type: 'Post'
tag: 'Security'
---

![Photo by Ales Nesetril on Unsplash](/images/posts/advent-security-2022.jpeg 'Photo by Ales Nesetril on Unsplash')

Following the idea of the [Advent Of Code](https://adventofcode.com/2022/about), the Advent of Security is an advent calendar of small steps that helps us improve the security and privacy in our digital lives. The intent is for people to use them as a guided way to review their current online security and privacy setup.

I will be sharing the steps I will be completing this year in case you want to follow along. Each of them will be easy to follow and can be completed by anyone with basic digital skills.

Let's begin!

## Day 1 - Use a password manager

Let's start with the basics. You probably use dozens of digital services and apps. If you are like me, remembering the password of each of them is mission impossible. Using the same password is not an option either. So, the action for day 1 is to install a password manager if you don´t already use one.

If you already have one like me, the action for us is to improve how we use it by:

-   Making sure we can access our password manager from multiple devices. We don't want to lose all our most important digital assets, passwords and credentials if we lost the only device that allows us access.
-   If you use the same password manager for both personal and work credentials, make sure you store your work passwords in a [different folder or vault](https://www.youtube.com/watch?v=i8esgZ7Kyrg).
-   Making sure the password manager password is secure by 2022 password standards. That password is the gate to all your identities on the Internet.

I use [1Password](https://1password.com/) and I am very happy with it. But there are other [free options out there](https://cybernews.com/best-password-managers/free-password-managers/).

## Day 2 - Use a multifactor authentication app (MFA)

A password manager is the first step towards a better digital experience. But if we want peace of mind, we should use a multi-factor authentication service. So, action for the day 2 of this advent calendar is to install one on your smartphone.

If you already use an MFA service like me, the action for us is to improve how we use it by:

-   Making sure we can access the MFA services from at least two devices. This ensures that if we lose our phone, we can still access accounts with MFA enabled.
-   If the MFA service uses a backup password or recovery code, let's ensure we store it in a secure place and, of course, we remember where.
-   Let's perform a security drill: let's leave our phones in another room and go to our sofa with our laptops. First, open an incognito window. Second, check if we can still access the digital services where MFA is enabled. Did you have to leave your sofa and go to the other room to grab your phone?

## Day 3 - Enable automatic software updates on your devices

This is a simple one but is easy to forget. Make sure your devices (smartphone, tablet, laptop, smart TV...) have automatic updates enabled. Automatic updates will ensure potential security patches are installed as soon as they are made available. Here is a typical checklist:

-   Enable automatic operating system updates on MacOS, Windows, Linux, Android, and iOS.
-   Enable automatic application updates in your desktop, tablet, and Android app stores.
-   For the advanced users, make sure your OS package manager (e.g. brew in mac) has the option to [automatically update packages enabled](https://github.com/Homebrew/homebrew-autoupdate).

## Day 4 - Review your browser extensions

Browser extensions like ad-blockers improve our digital experience while browsing the web. But they are also a potential attack vector that can compromise our privacy.

-   Make sure you reduce the number of browser extensions to the minimum. For each extension, ask yourself if you use it often enough that it deserves to clutter and slow down your browser. If the answer is no, just installed the extension every time you need it.
-   Once you get down to the minimum viable extensions, make sure they are up to date and come from trusted sources. I usually look at things like the number of reviews, number of installations, if it is featured by the browser company...

## Day 5 - Create a list of your key digital assets

On day 5 we are going to create a list with our key digital assets. A key digital asset is something that if it gets compromised we will be panicking and running around with our hands in our heads. So, these assets are worth taking extra care of. Here are some of mine. I divide them into two categories:

**Physical**:

-   Work laptop
-   Personal laptop
-   Smartphone
-   Portable SSD with personal documents

**Digital**:

-   Password manager service
-   Phones numbers
-   MFA or second-factor authentication service
-   Personal email accounts
    -   I bet that we don't want anyone to be able to access the thousands of personal emails you forgot to delete over the years
-   Work email account
-   Cloud file storage services like GDrive, OneDrive, and iCloud
-   Social accounts like Instagram, Facebook, WhatsApp, Twitter...
    -   I bet we don't want anyone to hijack our digital identity
-   Other important online accounts like bank accounts, Github, etc...

## Day 6 - Enable two factor authentication for your key digital assets

For day 6 we are going to add a extra layer of security to our key digital assets. For each item in the list we created in the previous day, we are going to:

-   Enable a second factor authentication method using the services we configured during day two.
-   If the online service has a phone number associated with it, make sure is up to date and it is a phone number that you have access to.
-   For online services with mobile apps (like bank accounts, email, etc), make sure those apps are protected with an additional PIN or biometric authentication mechanism. Some smarphones allow to add this extra layer of security even if the native app doesn't support it.

## Day 7 - Enable storage encryption for your physical devices

The challenge for day seven is to review if the storage encryption option is enabled in our devices. Storage encryption ensures that our [data at rest is protected](https://securitystudio.com/data-at-rest-vs-data-in-transit/) even if our devices get lost or stolen. We can use the list of physical assets created in day five to prioritize the devices that need to be protected.

Some devices already ship with this option enabled, for example my phone running on Android 12. Other devices like portable SSD disks may ship with third party software that allows you to encrypt them.

In some cases, like when you use FileVault on MacOS, you will have to generate a recovery code. You can save this code in a secure place like your password manager.
