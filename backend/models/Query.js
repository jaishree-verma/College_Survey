// // backend/models/Query.js
// import mongoose from "mongoose";

// const querySchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   query: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
//   status: { type: String, default: "Pending" } // Pending / Resolved
// });

// export default mongoose.model("Query", querySchema);
// backend/models/Query.js
import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  email: { type: String, required: true },
  category: { type: String, required: true }, 
  query: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" } 
});

export default mongoose.model("Query", querySchema);
