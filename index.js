'use strict';

module.exports = cracked;

function cracked(expected) {
    var stdin = process.openStdin();

    process.stdout.write("Type '" + expected + "': ");
    stdin.addListener("data", function(d) {
        // don't be pedantic
        var fixedExpected = expected.toLowerCase().split('').sort().join('');
        // TODO(larsbutler): Trim the newline chars from the d so the first
        // case works.
        var fi_xD = d.toString().toLowerCase().split('').sort().join('');
        if (fixedExpected == fi_xD) {
            console.log('You did it!');
        }
        else {
            console.log('Close enough.');
        }
        process.exit();
    });
}
