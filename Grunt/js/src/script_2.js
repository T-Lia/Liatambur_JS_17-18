function friend (friends) {
    var realFriends = [];
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if (friend.length == 4)
            realFriends.push(friend);

    }
    return realFriends;
}

console.log (friend(["Mark", "Anton", "Nata", "Tatiana"]));