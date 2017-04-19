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

console.log(calculateYears(1000, 0.05, 0.18, 1100));