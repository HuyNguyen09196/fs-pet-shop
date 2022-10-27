var fs = require('fs');

var CRUD = process.argv[2]
var index = process.argv[3]
var index1= process.argv[4]
var index2 = process.argv[5]


if (CRUD === undefined  ) {
    console.error('Usage: node pets.js [read | create | update | destroy]')
}else if(CRUD==='read'){
    fs.readFile('pets.json', 'utf8', function (error, data) {
        var data = JSON.parse(data);
        if(error){
            console.log('something went wrong')
        }else if (index===undefined){
            console.log(data)
        } else if (index < data.length && index >= 0) {
            console.log(data[index])
        
        }else{
            console.log('Usage: node pets.js read INDEX')
        }
        });

}
if ( CRUD ==='create'){
    fs.readFile('pets.json', 'utf8', function (error, data) {
        if(error){
            console.log('something went wrong')
        }else if(index=== undefined || index1 === undefined || index2 === undefined){
            console.error('Usage: node pets.js create AGE KIND NAME')
        }else {
            var newData = JSON.parse(data) // convert object JSON to string

            var age = index
            var kind = index1
            var name = index2

            var newItem = {};
            newItem.age = age;
            newItem.kind = kind;
            newItem.name = name;
            newData.push(newItem)
            newData = JSON.stringify(newData); // convert string JS to object JSON
            fs.writeFile('pets.json', newData, function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Item Added Successfully!')
                }
            })
        }
    
});
}


