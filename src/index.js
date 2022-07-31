module.exports = function reverse(n) {
    const resultNum = String(Math.abs(n)).split("").reverse().join("");

    return +resultNum;
};
