import mongoose from "mongoose";

const pcBuilderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    Speaker: {
      Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      Brand: String,
      Category: String,
      Model: String,
      img1: String,
      Details: String,
      Price: Number,
      ProductId: Number,
    },
    UPS: {
      Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      Brand: String,
      Category: String,
      Model: String,
      img1: String,
      Details: String,
      Price: Number,
      ProductId: Number,
    },
    RAM: {
      Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        required: true,
      },
      Brand: {
        type: String,
        required: true,
      },
      Category: {
        type: String,
        required: true,
      },
      Model: {
        type: String,
        required: true,
      },
      img1: {
        type: String,
        required: true,
      },
      Details: {
        type: String,
        required: true,
      },
      Price: {
        type: Number,
        required: true,
      },
      ProductId: {
        type: Number,
        required: true,
      },
    },
    ROM: {
      Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        required: true,
      },
      Brand: {
        type: String,
        required: true,
      },
      Category: {
        type: String,
        required: true,
      },
      Model: {
        type: String,
        required: true,
      },
      img1: {
        type: String,
        required: true,
      },
      Details: {
        type: String,
        required: true,
      },
      Price: {
        type: Number,
        required: true,
      },
      ProductId: {
        type: Number,
        required: true,
      },
    },
    SSD: {
      Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        required: true,
      },
      Brand: {
        type: String,
        required: true,
      },
      Category: {
        type: String,
        required: true,
      },
      Model: {
        type: String,
        required: true,
      },
      img1: {
        type: String,
        required: true,
      },
      Details: {
        type: String,
        required: true,
      },
      Price: {
        type: Number,
        required: true,
      },
      ProductId: {
        type: Number,
        required: true,
      },
    },
    PSU: {
      Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        required: true,
      },
      Brand: {
        type: String,
        required: true,
      },
      Category: {
        type: String,
        required: true,
      },
      Model: {
        type: String,
        required: true,
      },
      img1: {
        type: String,
        required: true,
      },
      Details: {
        type: String,
        required: true,
      },
      Price: {
        type: Number,
        required: true,
      },
      ProductId: {
        type: Number,
        required: true,
      },
    },
    GPU: {
       Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      Brand: String,
      Category: String,
      Model: String,
      img1: String,
      Details: String,
      Price: Number,
      ProductId: Number,
    },
    Mouse: {
       Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      Brand: String,
      Category: String,
      Model: String,
      img1: String,
      Details: String,
      Price: Number,
      ProductId: Number,
    },
    MotherBoard: {
      Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        required: true,
      },
      Brand: {
        type: String,
        required: true,
      },
      Category: {
        type: String,
        required: true,
      },
      Model: {
        type: String,
        required: true,
      },
      img1: {
        type: String,
        required: true,
      },
      Details: {
        type: String,
        required: true,
      },
      Price: {
        type: Number,
        required: true,
      },
      ProductId: {
        type: Number,
        required: true,
      },
    },
    Monitor: {
       Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      Brand: String,
      Category: String,
      Model: String,
      img1: String,
      Details: String,
      Price: Number,
      ProductId: Number,
    },
    Keyboard: {
       Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      Brand: String,
      Category: String,
      Model: String,
      img1: String,
      Details: String,
      Price: Number,
      ProductId: Number,
    },
    CPU: {
      Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        required: true,
      },
      Brand: {
        type: String,
        required: true,
      },
      Category: {
        type: String,
        required: true,
      },
      Model: {
        type: String,
        required: true,
      },
      img1: {
        type: String,
        required: true,
      },
      Details: {
        type: String,
        required: true,
      },
      Price: {
        type: Number,
        required: true,
      },
      ProductId: {
        type: Number,
        required: true,
      },
    },
    CpuCooler: {
       Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      Brand: String,
      Category: String,
      Model: String,
      img1: String,
      Details: String,
      Price: Number,
      ProductId: Number,
    },
    Casing: {
      Bid: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        required: true,
      },
      Brand: {
        type: String,
        required: true,
      },
      Category: {
        type: String,
        required: true,
      },
      Model: {
        type: String,
        required: true,
      },
      img1: {
        type: String,
        required: true,
      },
      Details: {
        type: String,
        required: true,
      },
      Price: {
        type: Number,
        required: true,
      },
      ProductId: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const PCBuilder = mongoose.model("PCBuilder", pcBuilderSchema);
