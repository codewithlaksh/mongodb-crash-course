use("mongodbCrashCourse");

// db.courses.find();
// db.courses.findOne({_id: ObjectId('688df66877d78791d5f532b7')});

// db.courses.updateOne({
//     _id: ObjectId('688df66877d78791d5f532b7')
// }, {
//     $set: {
//         price: 399.99
//     }
// })

// db.courses.updateMany({
//     price: 199.99
// }, {
//     $set: {
//         price: 699.99
//     }
// })

// db.courses.updateMany({}, {
//     $set: {
//         duration: 9
//     }
// })

db.courses.updateMany({
    price: {
        $lt: 300
    }
}, {
    $set: {
        duration: 8
    }
})