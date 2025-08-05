use("mongodbCrashCourse");

// Read all documents
// db.blogs.find({});

// Read a document based on the filter
// db.blogs.findOne({slug: "learn-flask-web-development"});
// db.blogs.findOne({_id: ObjectId("6888db2eddc4c873d5f474e2")})

// Filter based on greater than or less than
db.blogs.find({
  tags: { $nin: ["python"] },
});
