/**
 * A command that repeats whatever it's told. It demonstrates how to receive
 * arguments for your commands.
 *
 * Example usage:
 *
 *   !echo Repeat this back to me
 */

function handler(event, globalObject) {
    var bot = globalObject.bot;

    // Arguments are originally separated by spaces, so put them back to echo the message
    var messageToEcho = event.args.join(" ");

    // The sendChat function lets you use {} as placeholders for variables.
    bot.sendChat("Repeating {}: {}", event.username, messageToEcho);
}

module.exports = {
    handler: handler, // The function to call when the command is triggered
    triggers: [ "echo" ] // Which command words will cause this to be called
}
