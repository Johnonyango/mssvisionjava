function formatTicketStatus(text) {
    var newText = text;

    if (text == 'CLOSED')
        newText = '<span style="' +
        'color:red' +
        text+
        '</span>';

    if (text == 'OPEN')
        newText = '<span style="color: green">' + text + '</span>';

    return newText;
}


