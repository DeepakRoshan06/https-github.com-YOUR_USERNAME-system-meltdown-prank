# 🚀 Hosting Your Prank Website

Here are the two easiest ways to get your prank online for free!

## Option 1: GitHub Pages (Best for Open Source)

Since you have the code in a git repository now:

1.  **Create a Repository on GitHub**
    *   Go to [github.com/new](https://github.com/new).
    *   Name it `system-meltdown-prank` (or similar).
    *   **Do NOT** check "Initialize with README" (you already have one).
    *   Click **Create repository**.

2.  **Push Your Code**
    *   Copy the commands under "**…or push an existing repository from the command line**".
    *   They look like this:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/system-meltdown-prank.git
        git branch -M main
        git push -u origin main
        ```
    *   Run these commands in your terminal inside the `login` folder.

3.  **Activate Pages**
    *   Go to your repository **Settings** tab.
    *   Click **Pages** on the left sidebar.
    *   Under **Source**, select `main` branch.
    *   Click **Save**.
    *   Wait a minute, and your site will be live at: `https://YOUR_USERNAME.github.io/system-meltdown-prank/`

## Option 2: Netlify Drop (Easiest & Fastest)

1.  Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2.  Drag and drop the entire `login` folder onto the page.
3.  **Done!** Netlify will give you a random URL like `agitated-beaver-123456.netlify.app`.
4.  (Optional) Click "Site settings" -> "Change site name" to make it friendlier.

## 🌐 Custom Domain (e.g., www.myprank.com)

If you want a real `.com` domain:
1.  Buy the domain on Namecheap or GoDaddy.
2.  In GitHub Pages or Netlify, go to "Custom Domain" settings.
3.  Follow their instructions to add the DNS records.
