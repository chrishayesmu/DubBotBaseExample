/**
 * A basic command that responds to "!hello" with "Hi, @user!"
 * It demonstrates the very basics of setting up a user-triggered command.
 */

function handler(event, globalObject) {
    var bot = globalObject.bot;

    // The sendChat function lets you use {} as placeholders for variables.
    bot.sendChat("Hi, @{}!", event.username);
}

module.exports = {
    handler: handler, // The function to call when the command is triggered
    triggers: [ "hello", "hi" ] // Which command words will cause this to be called
}
