import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trin: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    important: {
      type: String,
      requered: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("task", taskSchema);
