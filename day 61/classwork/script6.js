function realFriends(names) {
    let myFriends = [];

    for (let i = 0; i < names.length; i++) {
        if (names[i].length >= 4) {
            myFriends.push(names[i]);
        }
    }

    return myFriends;
}
