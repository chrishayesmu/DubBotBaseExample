# DubBotBaseExample

An example project that shows the bare minimum required to create a bot using [DubBotBase](https://www.github.com/chrishayesmu/DubBotBase).

The main things to take from this project are the file structure, configuration setup, and basic example commands and event listeners. If you replace the configuration values given with valid ones, you can start up a bot immediately and see how it behaves. Use <code>npm start</code> to launch it.

# Where can I find a more advanced example?

[EmancipatorBot](https://www.github.com/chrishayesmu/EmancipatorBot) is a bot I wrote that hangs out in the [Comfy Vidya Games](https://www.dubtrack.fm/join/comfy-vidya-games) room on Dubtrack. It's a real bot and contains more advanced functionality than the sample here. You can even fork it and take the same functionality to your own room, though you'll need your own MySQL instance somewhere to get all of it.

# Things you shouldn't do

This repo contains a file at [config/secret.json](https://www.github.com/chrishayesmu/DubBotBase/blob/master/config/secret.json), which has the bot's sample email address and password. *You should never commit such a file to your own repo.* Make sure to save your credentials file in your .gitignore and find a secure way to distribute it to the machine hosting your bot. If you do accidentally commit it publicly, consider the bot compromised and rotate its password immediately.
