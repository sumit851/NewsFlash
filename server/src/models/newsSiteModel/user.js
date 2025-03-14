const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true }, 
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }]
});
const PermissionSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String }
  });

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role: [{
        type: String,
        enum: ['user', 'admin', 'publisher'],
        default: 'user',
    }],
    createdAt:{
        type:Date,
        default:Date.now,
    },
    });

    const User = mongoose.model("User", userSchema);
    const Role = mongoose.model("Role", roleSchema);
    const Permission = mongoose.model("Permission", PermissionSchema);

    module.exports = { User, Role, Permission };