# NoteTaker - Node and Express Servers

### Overview

[This](https://matthew-lorber-note-taker.herokuapp.com/) is a Node, Express, and MySQL powered note-taking application hosted on Heroku. It lets the user create, read, and delete notes from a MySQL database.

### Technologies

* [Node.js]() runtime environment
* [Express]() routing, server HTML, JSON
* [MySQL]() store notes
* [jQuery]() simplify AJAX request and DOM traversal


### How's it Work?

* Check out this demo version of the site:

<video controls src="demo.mp4" width="640" height="480" alt="demo.mp4"></video>

* The user can save, view, and delete notes without having to refresh or navigate to a different page to see the changes. Note titles and bodies are visible in the main area (for convenience's sake).


### How Can I Use It?

1. Fork into a new repository.
2. Setup an account at Heroku and provision JawsDB.
3. Connect the Heroku deployment to the repo.
4. Create a .env file and store <code>PW=</code> (for local) and <code>JAWSDB_URL=</code> for Heroku.
5. Run npm init to install node modules.
6. Add .env and node_modules to your .gitignore.
7. Happy hacking!

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

See the [Supplemental Heroku Deployment Guide](../../Supplemental/HerokuGuide.md) for in-detail deployment instructions.

## License
MIT 2019 Matthew Lorber

