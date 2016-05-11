/**
 * Simple event listener which just logs certain events. Does not
 * record them in a database or anything like that.
 */

var DubBotBase = require("dubbotbase");
var ChatType = DubBotBase.ChatType;
var Event = DubBotBase.Event;

/**
 * A logging class provided by DubBotBase that provides basic
 * timestamps and the ability to log as 'info', 'warn' or 'error'.
 * Not a substitute for a real logging library if you want things like
 * filtering logs by log level, but effective enough if you're after
 * basic output. All logs print to standard output.
 */
var LOG = new DubBotBase.Log("EventLogger");

/**
 * Called when the currently playing media changes.
 */
function advanceHandler(event, globalObject) {
    LOG.info("The DJ has changed to {} playing \"{}\".", event.incomingDJ.username, event.media.fullTitle);
}

/**
 * Called whenever a chat message comes in.
 */
function chatHandler(event, /* unused */ globalObject) {
    var chatDescriptor;
    switch (event.type) {
        case ChatType.MESSAGE:
            chatDescriptor = "said";
            break;
        case ChatType.EMOTE:
            chatDescriptor = "emoted";
            break;
        case ChatType.COMMAND:
            chatDescriptor = "sent command";
            break;
    }

    // Ex: "Guy said >>> hi everyone"
    LOG.info("{} {} >>> {}", event.username, chatDescriptor, event.message);
}

/**
 * Called whenever someone grabs the currently playing media.
 */
function grabHandler(event, globalObject) {
    LOG.info("{} grabbed the current song", event.user.username);
}

/**
 * Called whenever someone votes on the currently playing media.
 */
function voteHandler(event, globalObject) {
    var voteType = event.vote === 1 ? "updubbed" : "downdubbed";

    LOG.info("{} {} the current song", event.user.username, voteType);
}

module.exports[Event.ADVANCE] = { handler: advanceHandler };
module.exports[Event.CHAT] = { handler: chatHandler };
module.exports[Event.GRAB] = { handler: grabHandler };
module.exports[Event.VOTE] = { handler: voteHandler };
