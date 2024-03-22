var myObj = {
    name: 'javascript',
    founder: 'Brendan Eich',
    estd: '1995',
    ranking: 1,
}

var keys = Object.keys(myObj);
console.log(keys);

// output: [name,founder,estd,ranking]

var values = Object.values(myObj)
console.log(values);

// output: [javascript, brendan eich, 1995]

var entries = Object.entries(myObj)

// Output: [ ['name':'javascript'], ['founder':'brendan eich']]....

