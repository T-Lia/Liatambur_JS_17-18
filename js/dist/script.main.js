function calculateYears(principal, interest, tax, desired) {
    var years = 0;
    var money = principal;

    while (money < desired) {
        var income = money * interest;
        money += income - income * tax;
        years++;
    }

    return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));;function friend (friends) {
    var realFriends = [];
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if (friend.length == 4)
            realFriends.push(friend);

    }
    return realFriends;
}

console.log (friend(["Mark", "Anton", "Nata", "Tatiana"]));