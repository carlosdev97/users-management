import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://carlosedm97:OJmVvxYuvpVXGHrb@users-management.zz7qp.mongodb.net/?retryWrites=true&w=majority&appName=users-management"
    );
    console.log("Conexión exitosa a MongoDB.");
  } catch (error) {
    console.error("Error durtante la conexión a MongoDB.", error);
    process.exit(1);
  }
};

export default connectMongo;
