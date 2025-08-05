const mongoose = require("mongoose");
const { Course } = require("./models/Course");

const connectDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/mongodbCrashCourse");
  console.log("Connected to mongodb !!");
};

connectDb();

async function findAllDocuments() {
  const courses = await Course.find({});
  console.log(courses);
}

async function updateDocs() {
  await Course.findByIdAndUpdate("6890b9e1abdcad270abd624d", {
    $set: {
      price: 299.99,
    },
  });
}

// findAllDocuments();
// updateDocs();
