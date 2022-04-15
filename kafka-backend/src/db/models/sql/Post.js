import DataTypes from "sequelize";
import db from "../../config/mysql.config.js";

const PostType = db.define(
  "posttype",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "PostTypes",
    timestamps: false,
  }
);

await PostType.sync();

const Post = db.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    postTypeId: {
      type: DataTypes.INTEGER,
    },
    acceptedAnswerId: {
      type: DataTypes.INTEGER,
    },
    parentId: {
      type: DataTypes.INTEGER,
    },
    ownerId: {
      type: DataTypes.INTEGER,
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ownerName: DataTypes.STRING,
    modifiedDate: DataTypes.DATE,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    tags: DataTypes.STRING,
    upvotes: DataTypes.INTEGER,
    downvotes: DataTypes.INTEGER,
    answerCount: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    approvalstatus: DataTypes.BOOLEAN,
    isBookmarked: DataTypes.BOOLEAN,
  },
  {
    tableName: "Posts",
    timestamps: false,
  }
);

PostType.hasMany(Post, { foreignKey: "postTypeId" });
Post.belongsTo(PostType, { foreignKey: "postTypeId" });

Post.hasOne(Post, { foreignKey: "acceptedAnswerId" });
Post.belongsTo(Post, { foreignKey: "acceptedAnswerId" });

Post.hasMany(Post, { as: "children", foreignKey: "parentId" });
Post.belongsTo(Post, { as: "parent", foreignKey: "parentId" });

//map owner id to user model

await Post.sync();

export default Post;
