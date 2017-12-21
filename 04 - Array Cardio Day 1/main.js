const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const fifteen = inventors.filter(element => element.year >= 1500 && element.year < 1600);
console.log('People born in fifteen are');
console.table(fifteen);

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log('Full name the inventors');
console.table(fullNames);

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log('Inventors ordered of oldest to youngest');
console.table(ordered);

const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log('Total of years: ' + totalYears);

const oldest = inventors.sort((a,b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.log('Inventors sort by age');
console.table(oldest);

/* const listBoulevards = [...document.querySelectorAll('.mw-category a')];
const de = listBoulevards.map(boulevard => boulevard.textContent).filter(data => data.includes('de'));
console.log(de); */

const alphabeticallyLastName = people.sort((a,b) => {
    const [aLast, aFirst] = a.split(',');
    const [bLast, bFirst] = b.split(',');
    return aLast > bLast ? 1 : -1;
});
console.log('People sort by last name');
console.table(alphabeticallyLastName);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const countTransportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log('Count of transportation: ', countTransportation);