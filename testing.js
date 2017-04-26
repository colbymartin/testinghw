//////////////// 1. Nickname ////////////////

function nicknameCheck(name, nickname) {
    name = name.toUpperCase();
    nickname = nickname.toUpperCase();
    if (nickname.length > name.length) {
        return false;
    }
    if (nickname === '') {
        return undefined;
    }
    let count = 0;
    let empty = [];
    for (let i = 0; i < name.length; i++) {
        if (name[i] === nickname[count]) {
            count++;
            empty.push(name[i]);
        }
    }
    if (empty.join('') === nickname) {
        return true;
    } else return false;
};


import test from 'ava';

test('nickname', function (t) {
    t.deepEqual(nicknameCheck('Colby', 'oby'), true);
    t.deepEqual(nicknameCheck('Bobby', 'bob'), true);
    t.deepEqual(nicknameCheck('Tom Cruise', 'muse'), true);
    t.deepEqual(nicknameCheck('Bobby', 'dkj'), false);
    t.deepEqual(nicknameCheck('William', 'dick'), false);
    t.deepEqual(nicknameCheck('William', 'washington'), false);
    t.deepEqual(nicknameCheck('William', ''), undefined);
    

});

//////////////// 2. Descending ////////////////


function descend(number) {
    let newnumber = number.toString();
    let numarray = newnumber.split('');
    numarray.sort();
    return Number(numarray.reverse().join(''));
}


test('descending', function (t) {
    t.deepEqual(descend(38048), 88430);
    t.deepEqual(descend(123), 321);
    t.deepEqual(descend(429), 942);
});


//////////////// 3. Longx ////////////////

function longX(werd) {
    let longestrun = 0;
    let count = 0;
    let counting = false;
    for (let i = 0; i < werd.length; i++) {
        if (werd[i] === 'x'){
            counting = true;
        }
        if (werd[i] !== 'x'){
            counting = false;
            count = 0;
        }
        if (counting === true){
            count++;
        }
        if (count > longestrun) {
            longestrun = count;
        }
    }
    return longestrun;
}

test('checkX', function(t) {
    t.deepEqual(longX('abxxaxterxtxxxa'), 3);
    t.deepEqual(longX('Cxolxxby'), 2);
    t.deepEqual(longX('coiuhs'), 0);
    t.deepEqual(longX('helxlo worxxlxxdxxxx'), 4);
});




//////////////// 4. GuessWho ////////////////



// test('GuessWho', function(t) {
//     t.deepEqual(guessWho(), )
// });
